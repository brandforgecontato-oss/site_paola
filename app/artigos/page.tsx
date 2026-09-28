import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artigos",
  description:
    "Textos curtos sobre direito de família e do trabalho, em linguagem simples. Conteúdo informativo de um conceito de site para portfólio.",
  alternates: { canonical: "/artigos" },
};

const AVISO_ARTIGO =
  "Este texto é informativo e faz parte de um projeto conceitual. Não substitui orientação jurídica.";

export default function Artigos() {
  return (
    <main id="conteudo" className="bg-navy-deep pt-topo">
      <header className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display mb-4 text-4xl font-bold tracking-tight">Artigos</h1>
          <p className="max-w-xl text-lg text-mist">
            Textos curtos para entender antes de decidir. Conteúdo informativo; não substitui
            orientação para o seu caso.
          </p>
        </div>
      </header>

      <article id="divorcio-em-cartorio" className="border-t border-white/10 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
            Divórcio em cartório: quando é possível
          </h2>
          <div className="flex flex-col gap-4 text-mist [&_p]:leading-relaxed">
            <p>
              Nem todo divórcio precisa passar pelo fórum. Desde a Lei 11.441/2007, é possível se
              divorciar diretamente em um cartório de notas, por escritura pública, sem precisar de
              um processo judicial. O caminho costuma ser mais rápido: em vez de esperar uma decisão
              do juiz, o casal assina a escritura e o divórcio já está feito.
            </p>
            <p>
              Para usar esse caminho, três condições precisam estar presentes ao mesmo tempo.
              Primeiro, o divórcio precisa ser consensual: os dois lados concordam em se divorciar e
              concordam com todos os termos, como a divisão dos bens, o nome que cada um vai usar
              depois e, se houver, a pensão entre o casal. Segundo, não pode haver filhos menores de
              idade ou filhos incapazes: quando existem, a lei exige a participação do Judiciário
              para proteger os interesses deles, mesmo que os pais concordem entre si. Terceiro, as
              duas partes precisam estar acompanhadas por advogado, seja um para cada uma ou um só
              advogado comum aos dois, já que a escritura de divórcio não é válida sem essa
              assistência.
            </p>
            <p>
              O cartório pode ser de qualquer lugar do Brasil, não precisa ser o do endereço do
              casal. O processo costuma envolver reunir os documentos pessoais e do casamento,
              combinar os termos do divórcio (incluindo a partilha de bens, quando houver) e levar
              tudo ao tabelião junto com o advogado, que redige e confere a escritura antes da
              assinatura. Depois de assinada, a escritura já vale como divórcio; para atualizar a
              certidão de casamento e outros documentos, geralmente é preciso levar uma via da
              escritura ao cartório de registro civil onde o casamento foi registrado.
            </p>
            <p>
              Quando falta algum desses requisitos (por exemplo, existe filho menor, ou um dos lados
              não concorda com algum termo), o caminho passa a ser o divórcio judicial, que corre em
              um processo no fórum e pode ser mais demorado. Mesmo nesse caso, entender os dois
              caminhos com antecedência ajuda a saber o que esperar e a se preparar melhor para cada
              etapa.
            </p>
            <p className="text-sm text-mist/70">
              Fontes: Lei 11.441/2007 (planalto.gov.br) e Resolução CNJ n. 35/2007, que disciplina a
              aplicação da lei pelos cartórios.
            </p>
            <p className="text-sm text-mist/70">{AVISO_ARTIGO}</p>
          </div>
        </div>
      </article>

      <article id="rescisao-o-que-conferir" className="border-t border-white/10 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
            Rescisão: o que conferir antes de assinar
          </h2>
          <div className="flex flex-col gap-4 text-mist [&_p]:leading-relaxed">
            <p>
              O documento de rescisão (também chamado de termo de rescisão do contrato de trabalho)
              reúne os valores que a empresa deve pagar quando o contrato termina. Conferir cada
              item antes de assinar evita descobrir depois que alguma coisa ficou de fora.
            </p>
            <p>
              O primeiro ponto é o saldo de salário: os dias trabalhados no mês da saída que ainda
              não foram pagos. Depois vem o aviso prévio, que pode ser trabalhado (a pessoa continua
              trabalhando por um período) ou indenizado (a empresa paga o valor correspondente sem
              exigir o trabalho); vale conferir qual dos dois foi aplicado e se o valor bate com o
              tempo de casa, já que o aviso prévio cresce com os anos trabalhados. Em seguida estão o
              13º salário proporcional ao ano da saída e as férias: tanto as já vencidas e ainda não
              tiradas quanto as proporcionais ao período trabalhado, sempre acrescidas de um terço.
            </p>
            <p>
              Outro ponto importante é o FGTS: além do saldo que já deveria estar depositado mês a
              mês, quando a saída é uma dispensa sem justa causa, a empresa deve pagar uma multa de
              40% sobre o total depositado no fundo durante o contrato, e entregar as guias que
              liberam o saque do FGTS e, quando cabível, o acesso ao seguro-desemprego. Desde a
              reforma trabalhista de 2017 (Lei 13.467/2017), o pagamento das verbas rescisórias tem
              um prazo único de até 10 dias corridos contados do fim do contrato, e a homologação do
              termo por sindicato deixou de ser obrigatória; ainda assim, nada impede pedir para um
              advogado revisar o cálculo antes de assinar, especialmente em casos mais complexos.
            </p>
            <p>
              Vale também verificar se o exame demissional foi realizado (ele é obrigatório) e se
              constam corretamente a data de saída, o motivo da rescisão e o tempo de casa, porque
              esses dados influenciam diretamente os valores calculados. Guardar cópias de
              contracheques, do contrato de trabalho e de mensagens trocadas com a empresa ajuda
              caso seja preciso questionar algum valor depois.
            </p>
            <p className="text-sm text-mist/70">
              Fontes: Consolidação das Leis do Trabalho (CLT), arts. 477 a 479, e Lei 13.467/2017
              (planalto.gov.br).
            </p>
            <p className="text-sm text-mist/70">{AVISO_ARTIGO}</p>
          </div>
        </div>
      </article>
    </main>
  );
}
