import { notFound } from "next/navigation";
import Link from "next/link";
import { headers } from "next/headers";
import { getChangelog } from "../../../lib/changelogs";

export default async function ChangelogDetail({ params }) {
  let cl = null;
  try {
    const h = headers();
    const host = h.get("host");
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const baseUrl = `${protocol}://${host}`;
    const res = await fetch(`${baseUrl}/api/changelogs/${params.slug}`, { cache: "no-store" });
    if (res.ok) {
      cl = await res.json();
    }
  } catch {}
  if (!cl) {
    const fallback = getChangelog(params.slug);
    if (!fallback) return notFound();
    cl = fallback;
  }

  return (
    <div className="mx-auto max-w-3xl p-4">
      <Link
        href="/changelogs"
        className="text-sm text-indigo-600 transition hover:text-indigo-800"
      >
        ← Voltar
      </Link>
      <div className="mt-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm font-mono text-gray-500">v{cl.version}</p>
          <span className="text-xs text-gray-500">{cl.published_at ?? cl.date}</span>
        </div>
        <h1 className="mt-1 text-xl font-bold">{cl.title}</h1>
        <p className="mt-1 text-sm text-gray-700">{cl.summary}</p>
      </div>
    </div>
  );
}
