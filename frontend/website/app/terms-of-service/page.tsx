import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Terms governing the use of Dr. Hasan Nasir Cheema's appointment booking service.",
};

export default function TermsOfServicePage() {
    return (
        <>
            <section className="px-7 pt-16 pb-8">
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                        Legal
                    </span>
                    <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold">
                        Terms of Service
                    </h1>
                    <p className="mt-2.5 text-[0.92rem] text-ink-soft">
                        Last updated: [date]
                    </p>
                    <p className="mt-1 text-[0.85rem] text-honey-deep font-mono">
                        DRAFT — review and finalize wording with Dr. Hasan Nasir
                        Cheema before publishing.
                    </p>
                </div>
            </section>

            <section className="px-7 pb-20">
                <div className="mx-auto max-w-[720px]">
                    <p className="text-ink-soft">
                        By messaging [Business legal name] (&ldquo;the
                        clinic&rdquo;) to book an appointment, you agree to the
                        following terms.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        What this service is
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        This system lets you message us on WhatsApp or Facebook
                        Messenger to book, reschedule, or cancel a consultation
                        with Dr. Hasan Nasir Cheema. It is a booking and
                        communication tool only. It does not provide medical
                        diagnoses, treatment recommendations, or emergency care.
                    </p>
                    <p className="mt-3 text-ink-soft font-medium">
                        If you are experiencing a medical emergency, do not use
                        this system — contact emergency services or go to the
                        nearest emergency room immediately.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Booking and payment
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            Appointments are offered within the clinic&apos;s
                            consultation hours and are subject to availability
                        </li>
                        <li>
                            An appointment is only confirmed once payment has
                            been made in full and in advance
                        </li>
                        <li>
                            Payments are processed securely by GoPayFast; the
                            clinic does not collect or store your card or
                            account details
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Cancellations, rescheduling, and refunds
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        These are covered in our{" "}
                        <Link
                            href="/refund-cancellation-policy"
                            className="text-sage-deep hover:underline"
                        >
                            Refund &amp; Cancellation Policy
                        </Link>
                        , which forms part of these terms.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Communication
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We communicate with you through WhatsApp and Facebook
                        Messenger. Please keep your messages relevant to booking
                        and appointment matters, and treat clinic staff with
                        respect — we&apos;ll do the same.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Limitation of liability
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        <span className="rounded bg-mist px-1.5 py-0.5 font-mono text-[0.85em] text-sage-deep">
                            [Placeholder — standard liability disclaimer
                            language, to be reviewed with counsel]
                        </span>
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Governing law
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        These terms are governed by the laws of{" "}
                        <span className="rounded bg-mist px-1.5 py-0.5 font-mono text-[0.85em] text-sage-deep">
                            [jurisdiction, e.g., Pakistan / Punjab]
                        </span>
                        , without regard to conflict of law principles.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Changes to these terms
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We may update these terms from time to time. The
                        &ldquo;Last updated&rdquo; date above will reflect the
                        most recent revision.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Contact us
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Questions about these terms can be sent to
                        [contact@yourdomain.com] or [clinic phone number].
                    </p>

                    <div className="mt-10 pt-8 border-t border-line-soft">
                        <Link
                            href="/"
                            className="text-sage-deep text-sm hover:underline"
                        >
                            ← Back to home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
