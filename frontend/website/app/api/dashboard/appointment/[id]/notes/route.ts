import { NextResponse, type NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function PATCH(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const notes: string = typeof body.notes === "string" ? body.notes : "";

    await prisma.appointments.update({
        where: { id: params.id },
        data: { notes, updated_at: new Date() },
    });

    return NextResponse.json({ ok: true });
}
