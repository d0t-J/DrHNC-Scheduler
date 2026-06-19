import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Doctor Login",
    description: "Doctor dashboard login",
    robots: { index: false, follow: false },
};

export default function DashboardPage() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center px-7 py-20">
            <div className="w-full max-w-sm">
                <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                    Dashboard
                </span>
                <h1 className="mt-3 text-[1.8rem] font-semibold text-ink">
                    Doctor login
                </h1>
                <p className="mt-2 text-sm text-ink-soft">
                    This area is for Dr. Hasan Nasir Cheema only.
                </p>

                {/* NextAuth skeleton — real provider configured in Stage 2 */}
                <a
                    href="/api/auth/signin"
                    className="mt-8 flex w-full items-center justify-center rounded-full bg-sage px-6 py-3.5 text-[0.95rem] font-semibold text-white no-underline transition hover:bg-sage-deep hover:no-underline"
                >
                    Sign in
                </a>
            </div>
        </div>
    );
}
