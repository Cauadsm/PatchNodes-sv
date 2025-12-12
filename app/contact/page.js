"use client";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus({ ok: true, msg: "Mensagem enviada com sucesso!" });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({ ok: false, msg: data.error ?? "Falha ao enviar a mensagem" });
      }
    } catch {
      setStatus({ ok: false, msg: "Erro inesperado ao enviar" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="text-2xl font-bold text-indigo-700">Contato</h1>
      <p className="text-sm text-gray-600">Envie sua mensagem para a equipe do servidor.</p>
      <form onSubmit={onSubmit} className="mt-4 space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mensagem</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
            placeholder="Escreva sua mensagem..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
        {status && (
          <p className={`mt-2 text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>{status.msg}</p>
        )}
      </form>
    </div>
  );
}
