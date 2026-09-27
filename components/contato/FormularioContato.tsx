"use client";
// Formulário de contato com validação no servidor via Server Action.
// Estilize as classes className com o Tailwind do projeto.
// Uso: <FormularioContato /> em qualquer Server ou Client Component.
import { useActionState, useId } from "react";
import { enviarContato, type EstadoFormulario } from "./acoes";

const estadoInicial: EstadoFormulario = { ok: false, mensagem: "" };

export function FormularioContato() {
  const id = useId();
  const [estado, action, pendente] = useActionState(enviarContato, estadoInicial);

  if (estado.ok) {
    return <p role="status">{estado.mensagem}</p>;
  }

  return (
    <form action={action} noValidate aria-label="Formulário de contato">
      {estado.mensagem && !estado.ok && (
        <p role="alert" aria-live="polite">
          {estado.mensagem}
        </p>
      )}

      <div>
        <label htmlFor="nome">Nome</label>
        <input
          id={`${id}-nome`}
          name="nome"
          type="text"
          autoComplete="name"
          required
          aria-describedby={estado.erros?.nome ? `${id}-erro-nome` : undefined}
        />
        {estado.erros?.nome && (
          <span id={`${id}-erro-nome`} role="alert">
            {estado.erros.nome}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-describedby={estado.erros?.email ? `${id}-erro-email` : undefined}
        />
        {estado.erros?.email && (
          <span id={`${id}-erro-email`} role="alert">
            {estado.erros.email}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id={`${id}-mensagem`}
          name="mensagem"
          rows={5}
          required
          aria-describedby={estado.erros?.mensagem ? `${id}-erro-mensagem` : undefined}
        />
        {estado.erros?.mensagem && (
          <span id={`${id}-erro-mensagem`} role="alert">
            {estado.erros.mensagem}
          </span>
        )}
      </div>

      <div>
        <label>
          <input
            id={`${id}-lgpd`}
            type="checkbox"
            name="lgpd"
            required
            aria-describedby={estado.erros?.lgpd ? `${id}-erro-lgpd` : undefined}
          />
          {" "}Concordo com o uso dos meus dados para resposta a este contato.
        </label>
        {estado.erros?.lgpd && <span id={`${id}-erro-lgpd`} role="alert">{estado.erros.lgpd}</span>}
      </div>

      <button type="submit" disabled={pendente}>
        {pendente ? "Enviando…" : "Enviar mensagem"}
      </button>
    </form>
  );
}
