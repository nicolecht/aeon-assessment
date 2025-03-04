// This file should follow kebab-case naming (e.g., "get-secure-word"),
// but it is using camelCase ("getSecureWord") to comply with the assessment requirements.

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username } = await req.json();

  if (!username) {
    return NextResponse.json({ error: "Missing username" }, { status: 400 });
  }

  return NextResponse.json({ secureWord: "secure123" });
}
