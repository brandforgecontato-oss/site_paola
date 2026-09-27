#!/usr/bin/env node
// Fase 0: diagnóstico do ambiente. Só LÊ; não instala, não move e não apaga nada.
// Uso (na raiz do projeto): node .claude/skills/comecar/scripts/checar-ambiente.mjs
// Funciona igual no Windows e no macOS. Saída em JSON para o Claude interpretar.

import { execFileSync, execSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { homedir, platform } from "node:os";
import { join, normalize } from "node:path";

const raiz = normalize(process.cwd());

function rodar(cmd) {
  try {
    return execSync(cmd, { cwd: raiz, stdio: ["ignore", "pipe", "ignore"], encoding: "utf8" }).trim();
  } catch {
    return null;
  }
}

// OneDrive: caminhos que contêm OneDrive indicam sincronização ativa, o que causa conflitos com npm e git.
const emOneDrive = /[/\\]OneDrive[/\\]/i.test(raiz);

// PowerShell ExecutionPolicy (Windows): "Restricted" impede rodar scripts npm e mjs.
let executionPolicy = null;
if (platform() === "win32") {
  executionPolicy = rodar("powershell -NonInteractive -Command Get-ExecutionPolicy");
}
const executionPolicyBloqueada =
  executionPolicy !== null && ["restricted", "allsigned"].includes(executionPolicy.trim().toLowerCase());

function pastasCom(dir, arquivo) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(dir, d.name, arquivo)))
    .map((d) => d.name);
}

// Node
const versaoNode = process.versions.node;
const [maior, menor] = versaoNode.split(".").map(Number);
const nodeOk = maior > 20 || (maior === 20 && menor >= 9);

// Git e remotes
const versaoGit = rodar("git --version");
const remotes = rodar("git remote -v") ?? "";
const remoteTemplate = /^template\s+(\S+)/m.exec(remotes)?.[1] ?? null;
const remoteOrigin = /^origin\s+(\S+)/m.exec(remotes)?.[1] ?? null;
const usuarioGit = rodar("git config user.name");
// Conta única da empresa: identidade local do repositório e usuário na URL do origin (ver fase 0).
const CONTA_EMPRESA = "brandforgecontato-oss";
const EMAIL_EMPRESA = "brandforge.contato@gmail.com";
const nomeLocal = rodar("git config --local user.name");
const emailLocal = rodar("git config --local user.email");
const contaEmpresa = {
  nomeLocal,
  emailLocal,
  identidadeOk: emailLocal === EMAIL_EMPRESA,
  originComUsuario: !!remoteOrigin && remoteOrigin.startsWith(`https://${CONTA_EMPRESA}@github.com/`),
  templateComUsuario: !!remoteTemplate && remoteTemplate.startsWith(`https://${CONTA_EMPRESA}@github.com/`),
};

// Dependências do projeto
const dependenciasInstaladas = existsSync(join(raiz, "node_modules", "next")) && existsSync(join(raiz, "node_modules", "@playwright", "mcp"));

// Navegador do Playwright (Chromium) no cache padrão de cada sistema
const cachePlaywright =
  process.env.PLAYWRIGHT_BROWSERS_PATH ||
  (platform() === "win32"
    ? join(process.env.LOCALAPPDATA ?? join(homedir(), "AppData", "Local"), "ms-playwright")
    : platform() === "darwin"
      ? join(homedir(), "Library", "Caches", "ms-playwright")
      : join(homedir(), ".cache", "ms-playwright"));
const navegadores = existsSync(cachePlaywright) ? readdirSync(cachePlaywright) : [];
// A revisão exigida muda com a versão do Playwright; na dúvida, "npx playwright install chromium" é idempotente.
const chromiumPresente = navegadores.some((n) => n.startsWith("chromium"));

// Skills globais (pessoais) com o mesmo nome das do projeto: a global TEM PRIORIDADE e esconde a do projeto.
const dirConfig = process.env.CLAUDE_CONFIG_DIR || join(homedir(), ".claude");
const dirSkillsGlobais = join(dirConfig, "skills");
const skillsProjeto = pastasCom(join(raiz, ".claude", "skills"), "SKILL.md");
const skillsGlobais = pastasCom(dirSkillsGlobais, "SKILL.md");
const conflitos = skillsGlobais.filter((s) => skillsProjeto.includes(s));
// Globais antigas do kit que não existem mais no projeto: não escondem nada, mas podem disparar no meio do fluxo.
const arquivadasNoTemplate = pastasCom(join(raiz, "_arquivo", "skills"), "SKILL.md");
const globaisArquivadas = skillsGlobais.filter((s) => arquivadasNoTemplate.includes(s));

// Vercel: CLI não é obrigatória (o fluxo padrão é GitHub + Vercel pelo painel).
const vercelLinkado = existsSync(join(raiz, ".vercel", "project.json")) || existsSync(join(raiz, ".vercel", "repo.json"));

// Estado do projeto
const estadoExiste = existsSync(join(raiz, "projeto", "ESTADO.md"));
const estado = estadoExiste ? readFileSync(join(raiz, "projeto", "ESTADO.md"), "utf8") : "";
const modoVersionamento = /\*\*Versionamento:\*\*\s*modo\s*([123])/i.exec(estado)?.[1] ?? null;

// Divergência com o upstream: modos 2/3 atualizam a referência remota antes de comparar.
let upstream = null;
let commitsSemPush = null;
let commitsSemPull = null;
let fetchOk = null;
try {
  upstream = execFileSync("git", ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{upstream}"], {
    cwd: raiz, stdio: ["ignore", "pipe", "ignore"], encoding: "utf8",
  }).trim();
  if (modoVersionamento === "2" || modoVersionamento === "3") {
    const remote = upstream.split("/")[0];
    try {
      execFileSync("git", ["fetch", "--quiet", remote], { cwd: raiz, stdio: "ignore", timeout: 45000 });
      fetchOk = true;
    } catch {
      fetchOk = false;
    }
  }
  const [ahead, behind] = execFileSync("git", ["rev-list", "--left-right", "--count", `HEAD...${upstream}`], {
    cwd: raiz, stdio: ["ignore", "pipe", "ignore"], encoding: "utf8",
  }).trim().split(/\s+/).map(Number);
  commitsSemPush = ahead;
  commitsSemPull = behind;
} catch {
  // Repositório sem upstream configurado: não há comparação remota possível.
}

console.log(
  JSON.stringify(
    {
      sistema: platform(),
      ambiente: { emOneDrive, executionPolicy, executionPolicyBloqueada },
      node: { versao: versaoNode, ok: nodeOk, minimo: "20.9.0" },
      git: { versao: versaoGit, usuario: usuarioGit, origin: remoteOrigin, template: remoteTemplate },
      sincronizacao: { modoVersionamento, upstream, commitsSemPush, commitsSemPull, fetchOk },
      contaEmpresa,
      dependenciasInstaladas,
      playwright: { cache: cachePlaywright, chromiumPresente },
      skills: {
        dirGlobal: dirSkillsGlobais,
        projeto: skillsProjeto,
        conflitosComGlobais: conflitos,
        globaisArquivadasNoTemplate: globaisArquivadas,
        outrasGlobais: skillsGlobais.filter((s) => !conflitos.includes(s) && !globaisArquivadas.includes(s)),
      },
      vercel: { projetoLinkado: vercelLinkado },
      estadoExiste,
    },
    null,
    2,
  ),
);
