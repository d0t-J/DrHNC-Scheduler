"use client";

import { useEffect, useState } from "react";

interface Settings {
    slot_duration_minutes: number;
    daily_patient_limit: number;
    consultation_start_time: string;
    consultation_end_time: string;
}

function timeToInput(t: string): string {
    // Prisma returns Time as a full ISO datetime string — extract HH:MM
    try {
        const d = new Date(t);
        if (!isNaN(d.getTime())) {
            return d.toISOString().substring(11, 16);
        }
    } catch {}
    // If it's already HH:MM:SS
    return t.substring(0, 5);
}

export default function SettingsView() {
    const [settings, setSettings] = useState<Settings | null>(null);
    const [form, setForm] = useState<Partial<Settings>>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/api/dashboard/settings")
            .then((r) => r.json())
            .then((d) => {
                setSettings(d.settings);
                setForm({
                    slot_duration_minutes: d.settings.slot_duration_minutes,
                    daily_patient_limit: d.settings.daily_patient_limit,
                    consultation_start_time: timeToInput(
                        d.settings.consultation_start_time
                    ),
                    consultation_end_time: timeToInput(
                        d.settings.consultation_end_time
                    ),
                });
            })
            .catch(() => setError("Could not load settings."))
            .finally(() => setLoading(false));
    }, []);

    async function save() {
        setSaving(true);
        setError("");
        try {
            const res = await fetch("/api/dashboard/settings", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error();
            setSaved(true);
            setTimeout(() => setSaved(false), 2500);
        } catch {
            setError("Save failed. Try again.");
        } finally {
            setSaving(false);
        }
    }

    if (loading) return <p className="text-ink-soft text-sm">Loading…</p>;

    return (
        <div className="max-w-lg">
            <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                Dashboard
            </span>
            <h1 className="mt-1 text-[1.6rem] font-semibold text-ink mb-8">
                Business settings
            </h1>

            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-ink mb-1.5">
                            Start time
                        </label>
                        <input
                            type="time"
                            value={form.consultation_start_time ?? ""}
                            onChange={(e) =>
                                setForm((p) => ({
                                    ...p,
                                    consultation_start_time: e.target.value,
                                }))
                            }
                            className="w-full rounded-xl border border-line px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-sage-deep/30"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-ink mb-1.5">
                            End time
                        </label>
                        <input
                            type="time"
                            value={form.consultation_end_time ?? ""}
                            onChange={(e) =>
                                setForm((p) => ({
                                    ...p,
                                    consultation_end_time: e.target.value,
                                }))
                            }
                            className="w-full rounded-xl border border-line px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-sage-deep/30"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">
                        Slot duration (minutes)
                    </label>
                    <input
                        type="number"
                        min={5}
                        max={60}
                        value={form.slot_duration_minutes ?? ""}
                        onChange={(e) =>
                            setForm((p) => ({
                                ...p,
                                slot_duration_minutes: Number(e.target.value),
                            }))
                        }
                        className="w-full rounded-xl border border-line px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-sage-deep/30"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">
                        Daily patient limit
                    </label>
                    <input
                        type="number"
                        min={1}
                        max={50}
                        value={form.daily_patient_limit ?? ""}
                        onChange={(e) =>
                            setForm((p) => ({
                                ...p,
                                daily_patient_limit: Number(e.target.value),
                            }))
                        }
                        className="w-full rounded-xl border border-line px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-sage-deep/30"
                    />
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                    onClick={save}
                    disabled={saving}
                    className="rounded-full bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-deep transition disabled:opacity-50"
                >
                    {saving ? "Saving…" : saved ? "Saved ✓" : "Save changes"}
                </button>
            </div>
        </div>
    );
}
