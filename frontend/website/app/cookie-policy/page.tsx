import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cookie Policy",
    description:
        "How drhasannasir.com and shop.drhasannasir.com use cookies and similar technologies.",
};

export default function CookiePolicyPage() {
    return (
        <>
            <section className="px-7 pt-16 pb-8">
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                        Legal
                    </span>
                    <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold">
                        Cookie Policy
                    </h1>
                    <p className="mt-2.5 text-[0.92rem] text-ink-soft">
                        Last updated: 4 August 2026
                    </p>
                </div>
            </section>

            <section className="px-7 pb-20">
                <div className="mx-auto max-w-[720px]">
                    <p className="text-ink-soft">
                        This policy explains how drhasannasir.com and
                        shop.drhasannasir.com use cookies and similar
                        technologies. It should be read with our{" "}
                        <Link
                            href="/privacy-policy"
                            className="text-sage-deep hover:underline"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        What cookies are
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Cookies are small files placed on a browser or device
                        when you visit a website. Similar technologies include
                        local storage, pixels, tags, and session identifiers.
                        They can remember actions, maintain a secure session,
                        measure site use, and support embedded or third-party
                        services.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Essential cookies
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Essential cookies are needed for core functions such as
                        keeping items in the cart, processing checkout, securing
                        forms, maintaining an account session, remembering cookie
                        choices, balancing traffic, and protecting the site from
                        abuse. The shop may not work correctly if these are
                        blocked.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Preference cookies
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Preference cookies remember choices such as display,
                        region, language, or other settings so you do not need to
                        enter them again on each visit.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Performance and analytics cookies
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        These cookies help us understand aggregate website use,
                        page performance, errors, and navigation so we can
                        improve the experience. Where a consent control is
                        presented, non-essential analytics should be used in
                        accordance with your selection.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Third-party services
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Payment providers, fraud-prevention and security tools,
                        hosting services, embedded maps, social-media features,
                        video content, or other integrations may set their own
                        cookies when their features load or you interact with
                        them. Those providers control their cookies under their
                        own policies.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Your controls
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        You can use the cookie notice or preference control where
                        available and can delete or block cookies through your
                        browser settings. Blocking essential cookies may prevent
                        the cart, checkout, login, booking, or security features
                        from functioning. Browser help pages explain how to view,
                        delete, and restrict stored cookies.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        How long cookies remain
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Session cookies expire when the browsing session ends.
                        Persistent cookies remain for a defined period or until
                        deleted. Duration varies according to the cookie&apos;s
                        purpose and the provider that sets it.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Changes and contact
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We may update this policy when website tools or providers
                        change. Questions can be sent to{" "}
                        <a
                            href="mailto:drhasannasir12@gmail.com"
                            className="text-sage-deep hover:underline"
                        >
                            drhasannasir12@gmail.com
                        </a>
                        .
                    </p>

                    <div className="mt-10 pt-8 border-t border-line-soft">
                        <Link
                            href="/"
                            className="text-sage-deep text-sm hover:underline"
                        >
                            &larr; Back to home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
