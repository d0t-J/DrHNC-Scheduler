import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "How Dr. Hasan Nasir collects, uses, stores, and protects information for online orders and appointment bookings.",
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
                        Last updated: 24 August 2026
                    </p>
                </div>
            </section>

            <section className="px-7 pb-20">
                <div className="mx-auto max-w-[720px]">
                    <p className="text-ink-soft">
                        This policy explains how Dr. Hasan Nasir
                        (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses,
                        shares, and protects personal information when you use
                        drhasannasir.com, shop.drhasannasir.com, purchase a
                        product, book a consultation, or contact the clinic.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Who is responsible for your information
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Dr. Hasan Nasir is responsible for the personal
                        information described in this policy. The clinic is
                        located at Street 4, Chak 199, Gattwala, East Canal
                        Road, Faisalabad, Pakistan. Privacy questions can be
                        sent to{" "}
                        <a
                            href="mailto:drhasannasir12@gmail.com"
                            className="text-sage-deep hover:underline"
                        >
                            drhasannasir12@gmail.com
                        </a>
                        .
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Information we collect
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            Contact details, including your name, email address,
                            phone number, and billing or delivery address
                        </li>
                        <li>
                            Order details, including products purchased,
                            quantities, prices, delivery status, returns, and
                            customer-support messages
                        </li>
                        <li>
                            Appointment details, including the requested date,
                            time, booking status, and information you choose to
                            provide when arranging a consultation
                        </li>
                        <li>
                            Payment status, transaction references, and limited
                            payment-method information supplied by the payment
                            provider; we do not collect or store full card or
                            bank-account details
                        </li>
                        <li>
                            Account details if you create a shop account, such
                            as login identifiers and saved order information
                        </li>
                        <li>
                            Technical information, such as IP address, browser
                            and device information, pages viewed, referral
                            source, and cookie or session identifiers
                        </li>
                        <li>
                            Messages sent through the website, email, WhatsApp,
                            Facebook Messenger, telephone, or other support
                            channels
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        How we use information
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>To process, deliver, and support product orders</li>
                        <li>
                            To schedule, confirm, administer, and communicate
                            about appointments
                        </li>
                        <li>
                            To process payments, prevent fraud, and maintain
                            transaction and accounting records
                        </li>
                        <li>
                            To respond to questions, complaints, return requests,
                            and delivery issues
                        </li>
                        <li>
                            To operate, secure, troubleshoot, and improve the
                            websites and shop
                        </li>
                        <li>
                            To comply with legal, regulatory, tax, record-keeping,
                            and dispute-resolution obligations
                        </li>
                        <li>
                            To send marketing messages only when you have asked
                            us to send them; you may opt out at any time
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Payments
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Payments are handled by the payment provider presented
                        at checkout. Payment details are submitted directly to
                        that provider and are governed by its privacy terms. We
                        receive only the information needed to confirm and
                        reconcile your payment, such as status, amount, and a
                        transaction reference.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        When we share information
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We do not sell your personal information. We share only
                        what is reasonably necessary with service providers that
                        help us operate, including:
                    </p>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            Website, shop, database, hosting, security, and email
                            providers
                        </li>
                        <li>
                            Payment providers, banks, and fraud-prevention
                            services involved in a transaction
                        </li>
                        <li>
                            Couriers and delivery partners that need your name,
                            phone number, and delivery address
                        </li>
                        <li>
                            WhatsApp, Facebook Messenger, or other communication
                            providers when you use those channels
                        </li>
                        <li>
                            Professional advisers, regulators, courts, or public
                            authorities where disclosure is required or
                            reasonably necessary to protect legal rights
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Cookies and similar technologies
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        The websites use essential cookies for cart, checkout,
                        account, security, and session functions. They may also
                        use preference, performance, analytics, or third-party
                        cookies. See our{" "}
                        <Link
                            href="/cookie-policy"
                            className="text-sage-deep hover:underline"
                        >
                            Cookie Policy
                        </Link>{" "}
                        for details and available controls.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Retention
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We keep order, payment, delivery, and accounting records
                        for as long as reasonably needed to provide support and
                        meet legal, tax, fraud-prevention, and dispute-resolution
                        obligations. Appointment and related conversation records
                        may be retained for up to 10 years for continuity of care
                        and administrative record-keeping. Technical logs and
                        cookies are kept for shorter periods appropriate to their
                        purpose. Information is deleted or anonymized when it is
                        no longer reasonably required.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        International hosting and processing
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Some service providers may store or process information
                        outside Pakistan. We use reputable providers and take
                        reasonable steps to ensure information is handled in
                        accordance with this policy and applicable requirements.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Your choices and requests
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        You may ask to access, correct, update, or delete
                        personal information we hold about you, or withdraw from
                        marketing communications, by contacting us. We may need
                        to verify your identity and may retain information where
                        required for legal, medical, accounting, fraud-prevention,
                        or dispute-resolution purposes.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Security
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We use reasonable technical and organizational measures
                        to protect information against unauthorized access, loss,
                        misuse, or alteration. No online system is completely
                        secure. Please do not send full card details or
                        unnecessary medical information through ordinary email
                        or messaging channels.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Children
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        The online shop is intended for adults. A parent or legal
                        guardian should place orders or arrange appointments for
                        a minor and is responsible for the information provided.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Changes to this policy
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We may update this policy as the websites, shop, service
                        providers, or legal requirements change. The date above
                        identifies the latest version.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Contact us
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Email{" "}
                        <a
                            href="mailto:drhasannasir12@gmail.com"
                            className="text-sage-deep hover:underline"
                        >
                            drhasannasir12@gmail.com
                        </a>{" "}
                        or call{" "}
                        <a
                            href="tel:+923316507678"
                            className="text-sage-deep hover:underline"
                        >
                            +92 331 6507678
                        </a>{" "}
                        with privacy questions or requests.
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
