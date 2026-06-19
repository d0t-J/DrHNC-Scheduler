import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "How Dr. Hasan Nasir Cheema's practice collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <section className="px-7 pt-16 pb-8">
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                        Legal
                    </span>
                    <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold">
                        Privacy Policy
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
                <div className="mx-auto max-w-[720px] prose-custom">
                    <p className="text-ink-soft">
                        [Business legal name] (&ldquo;the clinic&rdquo;,
                        &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides this policy
                        to explain how we collect, use, and protect information
                        when you contact us to book a consultation with Dr.
                        Hasan Nasir Cheema.
                    </p>

                    <h2>What we collect</h2>
                    <ul>
                        <li>
                            Your name and phone number, as shared via WhatsApp
                            or Facebook Messenger
                        </li>
                        <li>
                            The content of messages you send us while booking,
                            rescheduling, or asking questions
                        </li>
                        <li>
                            Appointment details: date, time, and status of your
                            booking
                        </li>
                        <li>
                            Payment confirmation status for your appointment (we
                            do not collect or store your card or bank account
                            details — these are handled directly by GoPayFast)
                        </li>
                    </ul>

                    <h2>How we use it</h2>
                    <ul>
                        <li>
                            To schedule, confirm, reschedule, and remind you
                            about appointments
                        </li>
                        <li>To respond to questions you send us</li>
                        <li>
                            To maintain a record of past appointments for
                            continuity of care
                        </li>
                    </ul>

                    <h2>What we don&apos;t do</h2>
                    <ul>
                        <li>
                            We do not use this system to provide medical
                            diagnoses or treatment recommendations — it exists
                            only to manage bookings
                        </li>
                        <li>
                            We do not store payment card or bank details; all
                            payment processing is handled by GoPayFast
                        </li>
                        <li>
                            We do not sell your information, and we do not share
                            it with third parties except the service providers
                            required to operate this system (Meta, for
                            WhatsApp/Messenger messaging, and GoPayFast, for
                            payment processing)
                        </li>
                    </ul>

                    <h2>How long we keep it</h2>
                    <p className="text-ink-soft">
                        <span className="rounded bg-mist px-1.5 py-0.5 font-mono text-[0.85em] text-sage-deep">
                            [Describe retention period — e.g., &ldquo;We retain
                            appointment and conversation records for [X years]
                            for continuity of care and record-keeping, after
                            which they are deleted.&rdquo;]
                        </span>
                    </p>

                    <h2>Your choices</h2>
                    <p className="text-ink-soft">
                        You can ask us to access, correct, or delete the
                        information we hold about you at any time by messaging
                        us on WhatsApp or Messenger, or by emailing
                        [contact@yourdomain.com].
                    </p>

                    <h2>Security</h2>
                    <p className="text-ink-soft">
                        We take reasonable technical and organizational measures
                        to protect your information against unauthorized access,
                        loss, or misuse. No system is completely secure, and we
                        encourage you to avoid sharing sensitive information
                        beyond what&apos;s needed to book an appointment.
                    </p>

                    <h2>Changes to this policy</h2>
                    <p className="text-ink-soft">
                        We may update this policy from time to time. The
                        &ldquo;Last updated&rdquo; date above will reflect the
                        most recent revision.
                    </p>

                    <h2>Contact us</h2>
                    <p className="text-ink-soft">
                        Questions about this policy can be sent to
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
