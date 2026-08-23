import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Legal Information",
    description:
        "Policies and legal information for Dr. Hasan Nasir's website, consultations, and online shop.",
};

const policies = [
    {
        href: "/privacy-policy",
        title: "Privacy Policy",
        description: "How we collect, use, and protect your information.",
    },
    {
        href: "/terms-of-service",
        title: "Terms & Conditions",
        description: "Terms for website use, consultations, and purchases.",
    },
    {
        href: "/refund-cancellation-policy",
        title: "Returns & Refunds",
        description: "Policies for returns, refunds, and appointment changes.",
    },
    {
        href: "/shipping-delivery-policy",
        title: "Shipping & Delivery",
        description: "Delivery information for products from the online shop.",
    },
    {
        href: "/health-product-disclaimer",
        title: "Health Disclaimer",
        description: "Important information about health and wellness products.",
    },
    {
        href: "/cookie-policy",
        title: "Cookie Policy",
        description: "How this website uses cookies and similar technologies.",
    },
];

export default function LegalPage() {
    return (
        <section className="px-7 py-16 md:py-20">
            <div className="mx-auto max-w-content">
                <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                    Legal
                </span>
                <h1 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] font-semibold">
                    Policies &amp; legal information
                </h1>
                <p className="mt-4 max-w-[58ch] text-ink-soft">
                    Read the policies that apply to this website, online shop,
                    and consultation services.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {policies.map((policy) => (
                        <Link
                            key={policy.href}
                            href={policy.href}
                            className="group rounded-xl border border-line-soft bg-paper-raised p-5 no-underline transition hover:-translate-y-px hover:border-sage hover:no-underline"
                        >
                            <h2 className="font-display text-[1.15rem] font-semibold text-ink group-hover:text-sage-deep">
                                {policy.title}
                            </h2>
                            <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                                {policy.description}
                            </p>
                            <span className="mt-4 inline-block text-[0.88rem] font-semibold text-sage-deep">
                                Read policy &rarr;
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
