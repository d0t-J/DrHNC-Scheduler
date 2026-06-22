import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const appointments = await prisma.appointments.findMany({
        orderBy: [{ appointment_date: "desc" }, { appointment_time: "asc" }],
        include: {
            patients: {
                select: {
                    id: true,
                    full_name: true,
                    phone_number: true,
                    messenger_psid: true,
                    channel: true,
                },
            },
            payments: {
                orderBy: { created_at: "desc" },
                take: 1,
                select: {
                    id: true,
                    status: true,
                    amount: true,
                    currency: true,
                    gopayfast_reference: true,
                    paid_at: true,
                },
            },
        },
    });

    return NextResponse.json({ appointments });
}
