"use client";

import type { ReactNode } from "react";
import type { Session } from "next-auth";
import { SessionProvider, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav({ session }: { session: Session | null }) {
    const pathname = usePathname();

    if (!session || pathname === "/dashboard/login") return null;

    const isDoctor = session.user.role === "doctor";

    const navLinks = [
        { href: "/dashboard", label: "Appointments" },
        ...(isDoctor ? [{ href: "/dashboard/settings", label: "Settings" }] : []),
    ];

    return (
        <header className="border-b border-line-soft bg-paper sticky top-0 z-10">
            <div className="mx-auto max-w-content px-7 h-14 flex items-center justify-between gap-6">
                <nav className="flex items-center gap-1">
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                pathname === l.href
                                    ? "bg-mist text-ink"
                                    : "text-ink-soft hover:text-ink hover:bg-mist/50"
                            }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <span className="text-[0.78rem] font-mono uppercase tracking-[0.08em] text-ink-soft">
                        {session.user.role}
                    </span>
                    <button
                        onClick={() => signOut({ callbackUrl: "/dashboard/login" })}
                        className="text-sm text-ink-soft hover:text-ink transition-colors"
                    >
                        Sign out
                    </button>
                </div>
            </div>
        </header>
    );
}

export default function DashboardShell({
    children,
    session,
}: {
    children: ReactNode;
    session: Session | null;
}) {
    return (
        <SessionProvider session={session}>
            <Nav session={session} />
            <main className="mx-auto max-w-content px-7 py-10">{children}</main>
        </SessionProvider>
    );
}
