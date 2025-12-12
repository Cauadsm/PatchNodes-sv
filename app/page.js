import Link from "next/link";
import { headers } from "next/headers";
import { CHANGELOGS } from "../lib/changelogs";

export default async function Home() {
  let changelogs = CHANGELOGS;
  try {
    const h = headers();
    const host = h.get("host");
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const baseUrl = `${protocol}://${host}`;
    const res = await fetch(`${baseUrl}/api/changelogs`, { cache: "no-store" });
    if (res.ok) {
      changelogs = await res.json();
    }
  } catch {}
  return (
    <div className="w-full px-0">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_280px]">
        <div className="space-y-4">
          <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-indigo-700">Changelogs</h2>
              <Link
                href="/changelogs"
                className="text-sm text-indigo-600 transition hover:text-indigo-800"
              >
                Ver todos
              </Link>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {changelogs.slice(0, 4).map((c) => (
                <Link
                  key={c.slug}
                  href={`/changelogs/${c.slug}`}
                  className="rounded-md border border-gray-200 p-3 transition hover:border-indigo-400"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-mono text-gray-500">v{c.version}</p>
                    <span className="text-[10px] text-gray-500">{c.published_at ?? c.date}</span>
                  </div>
                  <p className="mt-1 font-semibold">{c.title}</p>
                  <p className="text-sm text-gray-600">{c.summary}</p>
                </Link>
              ))}
            </div>
          </section>
          <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h2 className="text-xl font-bold text-indigo-700">Doação</h2>
            <div className="mt-2 rounded-md border p-4">
              <p className="font-semibold">Ajude a manter o servidor online</p>
              <p className="text-sm text-gray-600">
                Sua contribuição ajuda com custos de hospedagem, manutenção e melhorias.
              </p>
              <button className="mt-3 rounded bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700">
                Doar
              </button>
            </div>
          </section>
        </div>
        <aside className="space-y-4 lg:pr-0">
          <section className="rounded-l-lg rounded-r-none border border-r-0 border-gray-200 bg-white p-4 shadow-sm lg:rounded-l-lg lg:rounded-r-none">
            <h2 className="text-xl font-bold text-indigo-700">Fóruns</h2>
            <ul className="mt-2 divide-y">
              <li className="py-2">
                <p className="font-medium">Bem-vindo ao servidor</p>
                <p className="text-sm text-gray-600">Apresente-se e conheça a comunidade</p>
              </li>
              <li className="py-2">
                <p className="font-medium">Sugestões e ideias</p>
                <p className="text-sm text-gray-600">Compartilhe melhorias para o servidor</p>
              </li>
              <li className="py-2">
                <p className="font-medium">Suporte</p>
                <p className="text-sm text-gray-600">Dúvidas técnicas e ajuda</p>
              </li>
            </ul>
            <a href="#" className="mt-3 inline-block text-indigo-600 transition hover:text-indigo-800">
              Ver todos os tópicos
            </a>
          </section>
        </aside>
      </div>
    </div>
  );
}
