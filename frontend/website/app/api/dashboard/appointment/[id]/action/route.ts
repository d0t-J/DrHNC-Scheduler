import { NextResponse, type NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions, type DashboardRole } from "@/lib/auth";

type Action =
    | "reschedule"
    | "cancel"
    | "no-show"
    | "escalate"
    | "resolve-escalation"
    | "approve-payment"
    | "reject-payment";

// Actions restricted to doctor role only.
const DOCTOR_ONLY: Action[] = [
    "resolve-escalation",
    "approve-payment",
    "reject-payment",
];

const WEBHOOK_PATHS: Record<Action, string> = {
    reschedule: "dashboard/appointment/reschedule",
    cancel: "dashboard/appointment/cancel",
    "no-show": "dashboard/appointment/no-show",
    escalate: "dashboard/appointment/escalate",
    "resolve-escalation": "dashboard/appointment/resolve-escalation",
    "approve-payment": "dashboard/payment/approve",
    "reject-payment": "dashboard/payment/reject",
};

async function fireWebhook(
    path: string,
    payload: Record<string, unknown>
): Promise<{ ok: boolean; queued: boolean }> {
    const base = process.env.N8N_BASE_URL;
    if (!base) return { ok: false, queued: true };

    try {
        const res = await fetch(`${base}/webhook/${path}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            signal: AbortSignal.timeout(8000),
        });
        return { ok: res.ok, queued: !res.ok };
    } catch {
        return { ok: false, queued: true };
    }
}

export async function POST(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = session.user.role as DashboardRole;
    const body = await req.json();
    const action = body.action as Action;

    if (!action || !WEBHOOK_PATHS[action]) {
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    if (DOCTOR_ONLY.includes(action) && role !== "doctor") {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const payload: Record<string, unknown> = {
        appointmentId: params.id,
        performedBy: session.user.email,
        role,
        ...body.payload,
    };

    const result = await fireWebhook(WEBHOOK_PATHS[action], payload);

    return NextResponse.json({
        ok: result.ok,
        queued: result.queued,
        message: result.queued
            ? "Action queued — will sync once automation is available."
            : "Action sent.",
    });
}
