import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const dir = join(process.cwd(), "inquiries");
    await mkdir(dir, { recursive: true });

    const filename = `inquiry-${Date.now()}.json`;
    await writeFile(
      join(dir, filename),
      JSON.stringify({ ...data, timestamp: new Date().toISOString() }, null, 2)
    );

    return NextResponse.json({ success: true, id: filename });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to save inquiry" },
      { status: 500 }
    );
  }
}
