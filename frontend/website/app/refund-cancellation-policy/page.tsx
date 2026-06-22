import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Refund & Cancellation Policy",
    description:
        "Refund and cancellation policy for appointments with Dr. Hasan Nasir Cheema. All confirmed appointments are final.",
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
                        Last updated: 20 June 2026
                    </p>
                    <p className="mt-1 text-[0.85rem] text-ink-soft">
                        This policy applies to patient-initiated requests.
                        Clinic-initiated cancellations are handled differently —
                        see below.
                    </p>
                </div>
            </section>

            <section className="px-7 pb-20">
                <div className="mx-auto max-w-[720px]">
                    <div className="rounded-xl border border-ink/20 bg-ink text-paper px-6 py-5 mb-10">
                        <p className="font-semibold text-[1.05rem]">
                            All confirmed bookings are final.
                        </p>
                        <p className="mt-1 text-paper/80 text-[0.95rem]">
                            Once your appointment is confirmed and payment is
                            received, there are no refunds, no rescheduling, and
                            no cancellations.
                        </p>
                    </div>

                    <h2 className="text-[1.3rem] font-display font-semibold text-ink">
                        No refunds
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Advance payments are non-refundable in all circumstances
                        once an appointment is confirmed. This applies regardless
                        of the reason for non-attendance, including illness,
                        scheduling conflicts, or personal emergencies.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        No rescheduling
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Confirmed appointment slots cannot be moved or
                        transferred to another date or time. If you are unable
                        to attend, your slot is forfeited.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        No cancellations
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Confirmed appointments cannot be cancelled by the
                        patient. A confirmation message is your binding
                        commitment to attend.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Why this policy exists
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Consultation slots are limited and allocated on a
                        first-come, first-served basis. A late cancellation or
                        no-show cannot be filled on short notice, which directly
                        affects other patients waiting for care. This policy
                        exists to protect the integrity of the scheduling system
                        and ensure fair access for all patients.
                    </p>
                    <p className="mt-3 text-ink-soft">
                        We encourage you to book only when you are certain you
                        can attend at the proposed time.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        If Dr. Hasan Nasir cancels
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        The above rules apply to patient-initiated requests
                        only. In the rare event that Dr. Hasan Nasir must
                        cancel a confirmed appointment, you will receive a full
                        refund of your advance payment.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Questions
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Questions before booking can be sent to{" "}
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
                            ← Back to home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
