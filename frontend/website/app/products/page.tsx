import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Dr. Hasan Nasir Cheema's health and wellness products — available soon.",
};

export default function ProductsPage() {
    return (
        <section className="px-7 pt-20 pb-24 border-b border-line-soft">
            <div className="mx-auto max-w-content">
                <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                    Products
                </span>
                <h1 className="text-[clamp(2.1rem,4.6vw,3.4rem)] font-semibold leading-[1.08] max-w-[20ch] text-balance">
                    Products coming soon
                </h1>
                <p className="mt-5 max-w-[46ch] text-[1.1rem] text-ink-soft">
                    Dr. Hasan Nasir`&apos`s health and wellness products — available soon.
                </p>
                <div className="mt-6 mb-1 inline-flex items-center gap-4 rounded-xl border border-yellow-400 bg-yellow-100 px-5 py-3">
                    <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 font-mono text-[0.9rem] tracking-[0.1em] uppercase text-sage-deep">
                        Coming soon
                    </span>
                    <p className="text-[1rem] text-ink-soft">
                        This page will list available products soon.
                    </p>
                </div>
            </div>
        </section>
    );
}
