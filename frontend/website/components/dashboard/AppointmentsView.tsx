"use client";

import { useEffect, useState, useCallback } from "react";
import type { DashboardRole } from "@/lib/auth";

// ── Types ────────────────────────────────────────────────────────────────────

type AppointmentStatus =
    | "NEW"
    | "WAITING_FOR_DETAILS"
    | "SLOT_PROPOSED"
    | "RESERVED"
    | "PAYMENT_PENDING"
    | "PAYMENT_VERIFICATION_PENDING"
    | "CONFIRMED"
    | "RESCHEDULED"
    | "CANCELLED"
    | "NO_SHOW"
    | "CLOSED";

type PaymentStatus = "PENDING" | "PAID" | "FAILED" | "REFUNDED";

interface Patient {
    id: string;
    full_name: string | null;
    phone_number: string | null;
    messenger_psid: string | null;
    channel: string;
}

interface Payment {
    id: string;
    status: PaymentStatus;
    amount: string;
    currency: string;
    gopayfast_reference: string | null;
    paid_at: string | null;
}

interface Appointment {
    id: string;
    appointment_date: string;
    appointment_time: string;
    status: AppointmentStatus;
    notes: string | null;
    patients: Patient;
    payments: Payment[];
}

// ── Constants ────────────────────────────────────────────────────────────────

const STATUS_GROUPS: { label: string; statuses: AppointmentStatus[] }[] = [
    { label: "Needs attention", statuses: ["PAYMENT_VERIFICATION_PENDING", "SLOT_PROPOSED"] },
    { label: "Confirmed", statuses: ["CONFIRMED"] },
    { label: "Pending", statuses: ["NEW", "WAITING_FOR_DETAILS", "RESERVED", "PAYMENT_PENDING"] },
    { label: "Completed", statuses: ["CLOSED", "NO_SHOW"] },
    { label: "Rescheduled / Cancelled", statuses: ["RESCHEDULED", "CANCELLED"] },
];

const STATUS_COLORS: Record<AppointmentStatus, string> = {
    NEW: "bg-mist text-ink-soft",
    WAITING_FOR_DETAILS: "bg-mist text-ink-soft",
    SLOT_PROPOSED: "bg-honey/15 text-honey-deep",
    RESERVED: "bg-honey/15 text-honey-deep",
    PAYMENT_PENDING: "bg-honey/15 text-honey-deep",
    PAYMENT_VERIFICATION_PENDING: "bg-red-100 text-red-700",
    CONFIRMED: "bg-sage/15 text-sage-deep",
    RESCHEDULED: "bg-mist text-ink-soft",
    CANCELLED: "bg-mist text-ink-soft",
    NO_SHOW: "bg-red-100 text-red-700",
    CLOSED: "bg-mist text-ink-soft",
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function fmt(date: string, time: string) {
    const d = new Date(date);
    const t = new Date(time);
    return `${d.toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" })} · ${t.toLocaleTimeString("en-PK", { hour: "2-digit", minute: "2-digit", hour12: true })}`;
}

async function callAction(
    appointmentId: string,
    action: string,
    payload?: Record<string, unknown>
): Promise<{ queued: boolean; message: string }> {
    const res = await fetch(
        `/api/dashboard/appointment/${appointmentId}/action`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action, payload }),
        }
    );
    if (res.status === 403) return { queued: false, message: "Forbidden — insufficient permissions." };
    const data = await res.json();
    return { queued: data.queued ?? false, message: data.message ?? "" };
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ActionFeedback({ msg, queued }: { msg: string; queued: boolean }) {
    if (!msg) return null;
    return (
        <p
            className={`mt-2 text-sm rounded-lg px-3 py-2 ${
                queued
                    ? "bg-honey/10 text-honey-deep"
                    : "bg-sage/10 text-sage-deep"
            }`}
        >
            {msg}
        </p>
    );
}

function NotesEditor({
    appointmentId,
    initial,
}: {
    appointmentId: string;
    initial: string | null;
}) {
    const [notes, setNotes] = useState(initial ?? "");
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    async function save() {
        setSaving(true);
        await fetch(`/api/dashboard/appointment/${appointmentId}/notes`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ notes }),
        });
        setSaving(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    }

    return (
        <div className="mt-4">
            <label className="text-xs font-mono uppercase tracking-[0.08em] text-ink-soft">
                Internal notes
            </label>
            <textarea
                value={notes}
                onChange={(e) => { setNotes(e.target.value); setSaved(false); }}
                rows={3}
                className="mt-1.5 w-full rounded-xl border border-line px-3 py-2 text-sm text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-sage-deep/30 focus:border-sage-deep transition resize-none"
            />
            <button
                onClick={save}
                disabled={saving}
                className="mt-1.5 text-xs px-3 py-1.5 rounded-lg bg-mist text-ink-soft hover:bg-mist/70 transition disabled:opacity-50"
            >
                {saving ? "Saving…" : saved ? "Saved ✓" : "Save notes"}
            </button>
        </div>
    );
}

function AppointmentCard({
    appt,
    role,
}: {
    appt: Appointment;
    role: DashboardRole;
}) {
    const [expanded, setExpanded] = useState(false);
    const [feedback, setFeedback] = useState<{ msg: string; queued: boolean } | null>(null);
    const [rescheduleDate, setRescheduleDate] = useState("");
    const [rescheduleTime, setRescheduleTime] = useState("");
    const [showReschedule, setShowReschedule] = useState(false);

    const payment = appt.payments[0] ?? null;
    const isDoctor = role === "doctor";

    async function doAction(action: string, extra?: Record<string, unknown>) {
        const res = await callAction(appt.id, action, extra);
        setFeedback(res);
    }

    return (
        <div className="rounded-xl border border-line-soft bg-paper p-4">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="font-semibold text-ink text-[1rem]">
                        {appt.patients.full_name ?? "Unnamed patient"}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-soft">
                        {fmt(appt.appointment_date, appt.appointment_time)}
                    </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                    <span
                        className={`font-mono text-[0.7rem] uppercase tracking-[0.08em] px-2 py-0.5 rounded-full ${STATUS_COLORS[appt.status]}`}
                    >
                        {appt.status.replace(/_/g, " ")}
                    </span>
                    <button
                        onClick={() => setExpanded((p) => !p)}
                        className="text-sm text-ink-soft hover:text-ink transition px-2"
                        aria-label={expanded ? "Collapse" : "Expand"}
                    >
                        {expanded ? "▲" : "▼"}
                    </button>
                </div>
            </div>

            {expanded && (
                <div className="mt-4 space-y-4 border-t border-line-soft pt-4">
                    {/* Patient contact */}
                    <div>
                        <p className="text-xs font-mono uppercase tracking-[0.08em] text-ink-soft">
                            Contact
                        </p>
                        <div className="mt-1 text-sm text-ink space-y-0.5">
                            {appt.patients.phone_number && (
                                <p>
                                    <span className="text-ink-soft">Phone: </span>
                                    <a
                                        href={`tel:${appt.patients.phone_number}`}
                                        className="text-sage-deep hover:underline"
                                    >
                                        {appt.patients.phone_number}
                                    </a>
                                </p>
                            )}
                            {appt.patients.messenger_psid && (
                                <p>
                                    <span className="text-ink-soft">PSID: </span>
                                    {appt.patients.messenger_psid}
                                </p>
                            )}
                            <p>
                                <span className="text-ink-soft">Channel: </span>
                                {appt.patients.channel}
                            </p>
                        </div>
                    </div>

                    {/* Payment */}
                    {payment && (
                        <div>
                            <p className="text-xs font-mono uppercase tracking-[0.08em] text-ink-soft">
                                Payment
                            </p>
                            <div className="mt-1 text-sm text-ink space-y-0.5">
                                <p>
                                    {payment.amount} {payment.currency} ·{" "}
                                    <span
                                        className={`font-medium ${
                                            payment.status === "PAID"
                                                ? "text-sage-deep"
                                                : payment.status === "FAILED"
                                                ? "text-red-600"
                                                : "text-honey-deep"
                                        }`}
                                    >
                                        {payment.status}
                                    </span>
                                </p>
                                {payment.gopayfast_reference && (
                                    <p className="text-ink-soft text-xs">
                                        Ref: {payment.gopayfast_reference}
                                    </p>
                                )}
                            </div>
                            {/* Payment actions */}
                            <div className="mt-2 flex gap-2">
                                {isDoctor ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                doAction("approve-payment", {
                                                    paymentId: payment.id,
                                                })
                                            }
                                            className="text-xs px-3 py-1.5 rounded-lg bg-sage/15 text-sage-deep hover:bg-sage/25 transition"
                                        >
                                            Approve payment
                                        </button>
                                        <button
                                            onClick={() =>
                                                doAction("reject-payment", {
                                                    paymentId: payment.id,
                                                })
                                            }
                                            className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                                        >
                                            Reject payment
                                        </button>
                                    </>
                                ) : (
                                    <p className="text-xs text-ink-soft italic">
                                        Payment decisions: doctor only
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Appointment actions */}
                    <div>
                        <p className="text-xs font-mono uppercase tracking-[0.08em] text-ink-soft mb-2">
                            Actions
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setShowReschedule((p) => !p)}
                                className="text-xs px-3 py-1.5 rounded-lg border border-line text-ink-soft hover:text-ink hover:border-ink transition"
                            >
                                Reschedule
                            </button>
                            <button
                                onClick={() => doAction("cancel")}
                                className="text-xs px-3 py-1.5 rounded-lg border border-line text-ink-soft hover:text-red-600 hover:border-red-300 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => doAction("no-show")}
                                className="text-xs px-3 py-1.5 rounded-lg border border-line text-ink-soft hover:text-ink hover:border-ink transition"
                            >
                                Mark no-show
                            </button>
                            <button
                                onClick={() => doAction("escalate")}
                                className="text-xs px-3 py-1.5 rounded-lg bg-honey/10 text-honey-deep hover:bg-honey/20 transition"
                            >
                                Escalate
                            </button>
                            {isDoctor && (
                                <button
                                    onClick={() => doAction("resolve-escalation")}
                                    className="text-xs px-3 py-1.5 rounded-lg bg-sage/10 text-sage-deep hover:bg-sage/20 transition"
                                >
                                    Mark resolved
                                </button>
                            )}
                        </div>

                        {showReschedule && (
                            <div className="mt-3 flex flex-wrap items-end gap-3">
                                <div>
                                    <label className="block text-xs text-ink-soft mb-1">
                                        New date
                                    </label>
                                    <input
                                        type="date"
                                        value={rescheduleDate}
                                        onChange={(e) =>
                                            setRescheduleDate(e.target.value)
                                        }
                                        className="rounded-lg border border-line px-3 py-1.5 text-sm text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-sage-deep/30"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-ink-soft mb-1">
                                        New time
                                    </label>
                                    <input
                                        type="time"
                                        value={rescheduleTime}
                                        onChange={(e) =>
                                            setRescheduleTime(e.target.value)
                                        }
                                        className="rounded-lg border border-line px-3 py-1.5 text-sm text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-sage-deep/30"
                                    />
                                </div>
                                <button
                                    onClick={() => {
                                        if (!rescheduleDate || !rescheduleTime) return;
                                        doAction("reschedule", {
                                            newDate: rescheduleDate,
                                            newTime: rescheduleTime,
                                        });
                                        setShowReschedule(false);
                                    }}
                                    className="text-xs px-3 py-1.5 rounded-lg bg-sage/15 text-sage-deep hover:bg-sage/25 transition"
                                >
                                    Confirm reschedule
                                </button>
                            </div>
                        )}
                    </div>

                    {feedback && (
                        <ActionFeedback
                            msg={feedback.msg}
                            queued={feedback.queued}
                        />
                    )}

                    {/* Notes */}
                    <NotesEditor appointmentId={appt.id} initial={appt.notes} />
                </div>
            )}
        </div>
    );
}

// ── Main view ─────────────────────────────────────────────────────────────────

export default function AppointmentsView({ role }: { role: DashboardRole }) {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const load = useCallback(async () => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/dashboard/appointments");
            if (!res.ok) throw new Error("Failed to load");
            const data = await res.json();
            setAppointments(data.appointments);
        } catch {
            setError("Could not load appointments. Check database connection.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { load(); }, [load]);

    if (loading) {
        return (
            <p className="text-ink-soft text-sm">Loading appointments…</p>
        );
    }

    if (error) {
        return (
            <div>
                <p className="text-red-600 text-sm">{error}</p>
                <button
                    onClick={load}
                    className="mt-3 text-sm text-sage-deep hover:underline"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                        Dashboard
                    </span>
                    <h1 className="mt-1 text-[1.6rem] font-semibold text-ink">
                        Appointments
                    </h1>
                </div>
                <button
                    onClick={load}
                    className="text-sm text-ink-soft hover:text-ink transition"
                >
                    ↻ Refresh
                </button>
            </div>

            {appointments.length === 0 ? (
                <p className="text-ink-soft text-sm">No appointments yet.</p>
            ) : (
                <div className="space-y-12">
                    {STATUS_GROUPS.map((group) => {
                        const grouped = appointments.filter((a) =>
                            group.statuses.includes(a.status)
                        );
                        if (grouped.length === 0) return null;
                        return (
                            <section key={group.label}>
                                <h2 className="text-[0.78rem] font-mono uppercase tracking-[0.12em] text-ink-soft mb-4">
                                    {group.label}{" "}
                                    <span className="ml-1 text-ink">
                                        ({grouped.length})
                                    </span>
                                </h2>
                                <div className="space-y-3">
                                    {grouped.map((a) => (
                                        <AppointmentCard
                                            key={a.id}
                                            appt={a}
                                            role={role}
                                        />
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
