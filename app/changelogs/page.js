import Link from "next/link";
import { headers } from "next/headers";
import { CHANGELOGS } from "../../lib/changelogs";

export default async function ChangelogsPage() {
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
    <div className="mx-auto max-w-5xl p-4">
      <h1 className="text-2xl font-bold text-indigo-700">Changelogs</h1>
      <p className="text-sm text-gray-600">
        Veja as versões e alterações do servidor.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {changelogs.map((c) => (
          <Link
            key={c.slug}
            href={`/changelogs/${c.slug}`}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-indigo-400"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-mono text-gray-500">v{c.version}</p>
              <span className="text-xs text-gray-500">{c.published_at ?? c.date}</span>
            </div>
            <h2 className="mt-1 text-lg font-semibold">{c.title}</h2>
            <p className="mt-1 text-sm text-gray-700">{c.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
