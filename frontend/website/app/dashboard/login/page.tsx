"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        setLoading(false);

        if (res?.ok) {
            router.push("/dashboard");
            router.refresh();
        } else {
            setError("Incorrect email or password.");
        }
    }

    return (
        <div className="flex min-h-[70vh] items-center justify-center px-7 py-20">
            <div className="w-full max-w-sm">
                <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                    Dashboard
                </span>
                <h1 className="mt-3 text-[1.8rem] font-semibold text-ink">
                    Sign in
                </h1>
                <p className="mt-2 text-sm text-ink-soft">
                    Staff access only.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-ink mb-1.5"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border border-line px-4 py-3 text-[0.95rem] text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-sage-deep/30 focus:border-sage-deep transition"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-ink mb-1.5"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-xl border border-line px-4 py-3 text-[0.95rem] text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-sage-deep/30 focus:border-sage-deep transition"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-600">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 w-full rounded-full bg-sage px-6 py-3.5 text-[0.95rem] font-semibold text-white transition hover:bg-sage-deep disabled:opacity-50"
                    >
                        {loading ? "Signing in…" : "Sign in"}
                    </button>
                </form>
            </div>
        </div>
    );
}
