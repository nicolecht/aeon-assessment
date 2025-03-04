import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username } = await req.json();

  if (!username) {
    return NextResponse.json({ error: "Missing username" }, { status: 400 });
  }

  return NextResponse.json({ secureWord: "secure123" });
}
