import { NextResponse, type NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "doctor") {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const settings = await prisma.settings.findUnique({ where: { id: 1 } });
    return NextResponse.json({ settings });
}

export async function PATCH(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "doctor") {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    const allowed = [
        "consultation_start_time",
        "consultation_end_time",
        "slot_duration_minutes",
        "daily_patient_limit",
    ] as const;

    const data: Partial<Record<(typeof allowed)[number], unknown>> = {};
    for (const key of allowed) {
        if (key in body) data[key] = body[key];
    }

    const settings = await prisma.settings.update({
        where: { id: 1 },
        data: { ...data, updated_at: new Date() },
    });

    return NextResponse.json({ settings });
}
