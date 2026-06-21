import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "How Dr. Hasan Nasir collects, uses, and protects your information when you book a consultation.",
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
                        Last updated: 20 June 2026
                    </p>
                </div>
            </section>

            <section className="px-7 pb-20">
                <div className="mx-auto max-w-[720px]">
                    <p className="text-ink-soft">
                        Dr. Hasan Nasir (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
                        provides this policy to explain how we collect, use, and
                        protect information when you contact us to book a
                        consultation.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        What we collect
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            Your name and phone number, as shared via WhatsApp
                            or Facebook Messenger
                        </li>
                        <li>
                            The content of messages you send us while booking or
                            asking questions
                        </li>
                        <li>
                            Appointment details: date, time, and booking status
                        </li>
                        <li>
                            Payment confirmation status (we do not collect or
                            store card or bank account details — payment
                            processing is handled entirely by GoPayFast)
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        How we use it
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            To schedule, confirm, and send reminders about your
                            appointment
                        </li>
                        <li>To respond to questions you send us</li>
                        <li>
                            To maintain appointment records for continuity of
                            care
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        What we don&apos;t do
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            We do not use this system to provide medical
                            diagnoses or treatment recommendations
                        </li>
                        <li>
                            We do not store payment card or bank details
                        </li>
                        <li>
                            We do not sell your information or share it with
                            third parties except the service providers required
                            to operate this system: Meta (WhatsApp and Facebook
                            Messenger messaging) and GoPayFast (payment
                            processing)
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        How long we keep it
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We retain appointment and conversation records for 10
                        years for continuity of care and administrative
                        record-keeping, after which they are deleted.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Where your data is stored
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Your data is stored in databases hosted by third-party
                        infrastructure providers (including Neon and Railway)
                        whose servers may be located outside Pakistan. By using
                        this service you consent to this transfer.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Your rights
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        You can ask us to access, correct, or delete the
                        information we hold about you by emailing{" "}
                        <a
                            href="mailto:drhasannasir12@gmail.com"
                            className="text-sage-deep hover:underline"
                        >
                            drhasannasir12@gmail.com
                        </a>
                        . Please note that our 10-year retention obligation may
                        limit deletion requests for active or recent appointment
                        records.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Security
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We take reasonable technical and organizational measures
                        to protect your information against unauthorized access,
                        loss, or misuse. No system is completely secure, and we
                        encourage you to avoid sharing sensitive information
                        beyond what is needed to book an appointment.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Changes to this policy
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We may update this policy from time to time. The
                        &ldquo;Last updated&rdquo; date above will reflect the
                        most recent revision.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Contact us
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Questions about this policy can be sent to{" "}
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
