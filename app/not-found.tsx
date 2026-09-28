import Link from "next/link";

export default function NaoEncontrada() {
  return (
    <main id="conteudo" className="flex min-h-[70vh] flex-col items-center justify-center bg-navy-deep px-5 pt-topo text-center sm:px-8">
      <h1 className="font-display mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Esta página não existe.
      </h1>
      <p className="mb-8 max-w-md text-mist">
        O endereço pode ter mudado ou ter sido digitado com algum erro.
      </p>
      <Link href="/" className="botao-ouro rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep">
        Voltar ao início
      </Link>
    </main>
  );
}
