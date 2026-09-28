"use client";

// Fluxo 100% demonstrativo: nada é validado no servidor nem enviado a lugar nenhum
// (decisão registrada em projeto/ESTADO.md — sem Server Action, sem armazenamento).
import { useId, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const TEMAS = ["Família", "Trabalho", "Ainda não sei"] as const;
const FORMATOS = ["No escritório, em Brasília", "Por vídeo"] as const;

function proximosDiasUteis(quantidade: number) {
  const dias: Date[] = [];
  const data = new Date();
  while (dias.length < quantidade) {
    data.setDate(data.getDate() + 1);
    const diaSemana = data.getDay();
    if (diaSemana !== 0 && diaSemana !== 6) dias.push(new Date(data));
  }
  return dias;
}

const HORARIOS = ["9h", "10h30", "14h", "16h30"];

type Dados = {
  tema: (typeof TEMAS)[number] | "";
  formato: (typeof FORMATOS)[number] | "";
  horario: string;
  nome: string;
  email: string;
  mensagem: string;
};

const VAZIO: Dados = { tema: "", formato: "", horario: "", nome: "", email: "", mensagem: "" };

export function FluxoAgendar() {
  const [passo, setPasso] = useState(1);
  const [dados, setDados] = useState<Dados>(VAZIO);
  const [erro, setErro] = useState("");
  const [confirmado, setConfirmado] = useState(false);
  const reduz = useReducedMotion();
  const idBase = useId();
  const dias = useMemo(() => proximosDiasUteis(5), []);

  function avancar() {
    if (passo === 1 && !dados.tema) return setErro("Escolha um assunto para continuar.");
    if (passo === 2 && !dados.formato) return setErro("Escolha o formato de atendimento para continuar.");
    setErro("");
    setPasso((p) => p + 1);
  }

  function voltar() {
    setErro("");
    setPasso((p) => Math.max(1, p - 1));
  }

  function confirmar() {
    if (!dados.horario) return setErro("Escolha um horário para continuar.");
    if (!dados.nome.trim()) return setErro("Escreva seu nome para continuar.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email)) {
      return setErro("Esse e-mail parece incompleto. Confira o que falta.");
    }
    setErro("");
    setConfirmado(true);
  }

  if (confirmado) {
    return (
      <div role="status" className="rounded-2xl border border-white/10 bg-navy p-8 text-center">
        <p className="font-display mb-2 text-xl font-semibold text-gold">Tudo certo com a demonstração.</p>
        <p className="mb-8 text-mist">
          Nenhum agendamento foi feito e nenhum dado foi enviado. Em um site real, você receberia a
          confirmação por e-mail.
        </p>
        <button
          type="button"
          onClick={() => {
            setDados(VAZIO);
            setPasso(1);
            setConfirmado(false);
          }}
          className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep"
        >
          Voltar ao início
        </button>
      </div>
    );
  }

  const transicao = { duration: reduz ? 0 : 0.2 };

  return (
    <div className="rounded-2xl border border-white/10 bg-navy p-6 sm:p-10">
      <p className="mb-8 text-sm text-mist">
        Este agendamento é uma demonstração. Nada do que você preencher sai do seu navegador.
      </p>

      <ol className="mb-8 flex gap-2 text-xs text-mist" aria-label="Etapas do agendamento">
        {["Tema", "Formato", "Horário"].map((rotulo, i) => (
          <li
            key={rotulo}
            aria-current={passo === i + 1 ? "step" : undefined}
            className={`rounded-full px-3 py-1 ${passo === i + 1 ? "bg-gold text-navy-deep" : "bg-white/10"}`}
          >
            {i + 1}. {rotulo}
          </li>
        ))}
      </ol>

      {erro && (
        <p role="alert" className="mb-6 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {erro}
        </p>
      )}

      <AnimatePresence mode="wait">
        {passo === 1 && (
          <motion.fieldset
            key="tema"
            initial={{ opacity: 0, x: reduz ? 0 : 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduz ? 0 : -16 }}
            transition={transicao}
          >
            <legend className="mb-4 font-medium">Qual é o assunto?</legend>
            <div className="flex flex-wrap gap-3">
              {TEMAS.map((tema) => (
                <label
                  key={tema}
                  className={`cursor-pointer rounded-full border px-5 py-3 text-sm ${dados.tema === tema ? "border-gold bg-gold/10" : "border-white/15"}`}
                >
                  <input
                    type="radio"
                    name="tema"
                    value={tema}
                    checked={dados.tema === tema}
                    onChange={() => setDados((d) => ({ ...d, tema }))}
                    className="sr-only"
                  />
                  {tema}
                </label>
              ))}
            </div>
          </motion.fieldset>
        )}

        {passo === 2 && (
          <motion.fieldset
            key="formato"
            initial={{ opacity: 0, x: reduz ? 0 : 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduz ? 0 : -16 }}
            transition={transicao}
          >
            <legend className="mb-4 font-medium">Como prefere o atendimento?</legend>
            <div className="flex flex-wrap gap-3">
              {FORMATOS.map((formato) => (
                <label
                  key={formato}
                  className={`cursor-pointer rounded-full border px-5 py-3 text-sm ${dados.formato === formato ? "border-gold bg-gold/10" : "border-white/15"}`}
                >
                  <input
                    type="radio"
                    name="formato"
                    value={formato}
                    checked={dados.formato === formato}
                    onChange={() => setDados((d) => ({ ...d, formato }))}
                    className="sr-only"
                  />
                  {formato}
                </label>
              ))}
            </div>
          </motion.fieldset>
        )}

        {passo === 3 && (
          <motion.div
            key="horario"
            initial={{ opacity: 0, x: reduz ? 0 : 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduz ? 0 : -16 }}
            transition={transicao}
          >
            <fieldset className="mb-8">
              <legend className="mb-4 font-medium">Escolha um horário.</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {dias.map((dia) =>
                  HORARIOS.slice(0, 2).map((hora) => {
                    const rotulo = `${dia.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "2-digit" })} · ${hora}`;
                    return (
                      <label
                        key={rotulo}
                        className={`cursor-pointer rounded-lg border px-4 py-3 text-sm ${dados.horario === rotulo ? "border-gold bg-gold/10" : "border-white/15"}`}
                      >
                        <input
                          type="radio"
                          name="horario"
                          value={rotulo}
                          checked={dados.horario === rotulo}
                          onChange={() => setDados((d) => ({ ...d, horario: rotulo }))}
                          className="sr-only"
                        />
                        {rotulo}
                      </label>
                    );
                  }),
                )}
              </div>
            </fieldset>

            <div className="mb-4">
              <label htmlFor={`${idBase}-nome`} className="mb-1 block text-sm font-medium">
                Seu nome
              </label>
              <input
                id={`${idBase}-nome`}
                type="text"
                value={dados.nome}
                onChange={(e) => setDados((d) => ({ ...d, nome: e.target.value }))}
                className="w-full rounded-lg border border-white/15 bg-navy-deep px-4 py-3 text-sm"
                autoComplete="name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor={`${idBase}-email`} className="mb-1 block text-sm font-medium">
                Seu e-mail
              </label>
              <input
                id={`${idBase}-email`}
                type="email"
                value={dados.email}
                onChange={(e) => setDados((d) => ({ ...d, email: e.target.value }))}
                className="w-full rounded-lg border border-white/15 bg-navy-deep px-4 py-3 text-sm"
                autoComplete="email"
              />
            </div>
            <div className="mb-2">
              <label htmlFor={`${idBase}-mensagem`} className="mb-1 block text-sm font-medium">
                Quer adiantar algo? (opcional)
              </label>
              <textarea
                id={`${idBase}-mensagem`}
                value={dados.mensagem}
                onChange={(e) => setDados((d) => ({ ...d, mensagem: e.target.value }))}
                rows={3}
                className="w-full rounded-lg border border-white/15 bg-navy-deep px-4 py-3 text-sm"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex justify-between">
        {passo > 1 ? (
          <button type="button" onClick={voltar} className="text-sm font-medium text-mist hover:text-paper">
            Voltar
          </button>
        ) : (
          <span />
        )}
        {passo < 3 ? (
          <button
            type="button"
            onClick={avancar}
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep"
          >
            Continuar
          </button>
        ) : (
          <button
            type="button"
            onClick={confirmar}
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep"
          >
            Confirmar agendamento
          </button>
        )}
      </div>
    </div>
  );
}
