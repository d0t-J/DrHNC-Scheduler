import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Refund & Cancellation Policy",
    description:
        "Rescheduling, cancellation, and refund terms for appointments with Dr. Hasan Nasir Cheema.",
};

export default function RefundCancellationPolicyPage() {
    return (
        <>
            <section className="px-7 pt-16 pb-8">
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                        Legal
                    </span>
                    <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold">
                        Refund &amp; Cancellation Policy
                    </h1>
                    <p className="mt-2.5 text-[0.92rem] text-ink-soft">
                        Last updated: [date]
                    </p>
                    <p className="mt-1 text-[0.85rem] text-honey-deep font-mono">
                        DRAFT — specific hours and amounts not yet confirmed by
                        Dr. Hasan Nasir Cheema. Review before publishing.
                    </p>
                </div>
            </section>

            <section className="px-7 pb-20">
                <div className="mx-auto max-w-[720px]">
                    <p className="text-ink-soft">
                        Because appointments are confirmed with full advance
                        payment, this policy explains what happens if you need
                        to reschedule or cancel, and how refunds are handled.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Rescheduling
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            You may reschedule free of charge if you let us know
                            at least 24 hours before your appointment time, via
                            WhatsApp or Messenger
                        </li>
                        <li>
                            One complimentary reschedule is included per
                            booking; further reschedules for the same booking
                            are at the clinic&apos;s discretion
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Cancelling your appointment
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            <strong className="text-ink">
                                24 hours or more before your appointment:
                            </strong>{" "}
                            full refund of your advance payment
                        </li>
                        <li>
                            <strong className="text-ink">
                                Less than 24 hours before your appointment:
                            </strong>{" "}
                            <span className="rounded bg-mist px-1.5 py-0.5 font-mono text-[0.85em] text-sage-deep">
                                [placeholder — e.g., &ldquo;50% of the advance
                                payment is refunded&rdquo; or &ldquo;no
                                refund&rdquo;]
                            </span>
                        </li>
                        <li>
                            <strong className="text-ink">No-shows</strong> (not
                            attending without cancelling) forfeit the full
                            advance payment
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        If the clinic needs to cancel
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        If Dr. Hasan Nasir Cheema is unavailable and your
                        appointment must be cancelled by the clinic, you will be
                        offered a full refund or a free rebooking at the next
                        available slot — your choice.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        How refunds are processed
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Refunds are issued to your original payment method
                        through GoPayFast. Processing follows GoPayFast&apos;s
                        standard settlement cycle, which typically takes a few
                        business days; we&apos;ll let you know once a refund has
                        been initiated.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        How to request a reschedule, cancellation, or refund
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Message us on WhatsApp or Messenger with your name and
                        appointment date, and we&apos;ll handle the rest.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Changes to this policy
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We may update this policy from time to time. The
                        &ldquo;Last updated&rdquo; date above will reflect the
                        most recent revision.
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
