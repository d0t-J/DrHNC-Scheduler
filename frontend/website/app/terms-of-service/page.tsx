import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Terms governing the use of Dr. Hasan Nasir's appointment booking service.",
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
                        Last updated: 20 June 2026
                    </p>
                </div>
            </section>

            <section className="px-7 pb-20">
                <div className="mx-auto max-w-[720px]">
                    <p className="text-ink-soft">
                        By using this website or messaging Dr. Hasan Nasir to
                        book an appointment, you agree to the following terms.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        What this service is
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        This website and booking system are administrative tools
                        for scheduling consultations with Dr. Hasan Nasir. They
                        do not provide medical advice, diagnosis, or treatment,
                        and must not be used in a medical emergency — in an
                        emergency, contact emergency services or go to the
                        nearest hospital immediately.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Consultation hours and appointment structure
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            Consultations are available 7 days a week, 12:00&nbsp;PM
                            to 2:30&nbsp;PM
                        </li>
                        <li>Each appointment slot is 10 minutes</li>
                        <li>Slots are subject to availability</li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Booking and payment
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            An appointment is only confirmed once payment has
                            been made in full and in advance
                        </li>
                        <li>
                            Payments are processed securely by GoPayFast; we do
                            not collect or store your card or account details
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Booking finality — no refunds, no rescheduling, no
                        cancellations
                    </h2>
                    <p className="mt-3 text-ink font-medium">
                        Once your appointment is confirmed and payment is
                        received, the booking is final. There are no refunds,
                        no rescheduling, and no cancellations for
                        patient-initiated requests, for any reason.
                    </p>
                    <p className="mt-3 text-ink-soft">
                        You will be asked to explicitly acknowledge this before
                        completing payment. By proceeding to payment you confirm
                        that you have read and accepted this condition.
                    </p>
                    <p className="mt-3 text-ink-soft">
                        In the event that Dr. Hasan Nasir needs to cancel a
                        confirmed appointment, you will receive a full refund of
                        the advance payment made.
                    </p>
                    <p className="mt-3 text-ink-soft">
                        Full details are in our{" "}
                        <Link
                            href="/refund-cancellation-policy"
                            className="text-sage-deep hover:underline"
                        >
                            Booking Policy
                        </Link>
                        , which forms part of these terms.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Communication
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We communicate with you through WhatsApp and Facebook
                        Messenger. Please keep messages relevant to booking and
                        appointment matters, and treat clinic staff with respect.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Limitation of liability
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        This website and booking system are administrative tools
                        for scheduling consultations with Dr. Hasan Nasir. They
                        do not provide medical advice, diagnosis, or treatment,
                        and must not be used in a medical emergency — in an
                        emergency, contact emergency services or go to the
                        nearest hospital immediately.
                    </p>
                    <p className="mt-3 text-ink-soft">
                        To the maximum extent permitted by the laws of Pakistan,
                        Dr. Hasan Nasir is not liable for any indirect,
                        incidental, or consequential loss arising from use of
                        this website or booking system, including missed
                        appointments, scheduling errors caused by factors outside
                        reasonable control, or interruptions to the website,
                        WhatsApp, Messenger, or payment processing services.
                    </p>
                    <p className="mt-3 text-ink-soft">
                        Nothing in this section limits liability that cannot be
                        excluded under applicable law, including liability for
                        death, personal injury, or loss caused by gross
                        negligence or willful misconduct.
                    </p>
                    <p className="mt-3 text-ink-soft">
                        Where liability is not excluded above, total liability
                        arising from use of this booking system is limited to the
                        amount paid for the appointment giving rise to the claim.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Governing law
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        These terms are governed by the laws of Pakistan, without
                        regard to conflict of law principles.
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
                        Questions about these terms can be sent to{" "}
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
