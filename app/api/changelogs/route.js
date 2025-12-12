import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const service = process.env.SUPABASE_SERVICE_ROLE;
  const key = service ?? anon;
  if (!url || !key) {
    return NextResponse.json(
      { error: "Supabase URL ou chave não configuradas" },
      { status: 500 }
    );
  }
  const endpoint = `${url}/rest/v1/changelogs?select=slug,version,title,summary,published_at&order=published_at.desc`;
  try {
    const res = await fetch(endpoint, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
      cache: "no-store",
    });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: text }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: "Falha na consulta ao Supabase" }, { status: 500 });
  }
}
