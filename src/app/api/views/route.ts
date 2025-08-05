import { NextResponse } from "next/server";

let views = 0;

export async function GET() {
  views += 1;
  return NextResponse.json({ views });
}
