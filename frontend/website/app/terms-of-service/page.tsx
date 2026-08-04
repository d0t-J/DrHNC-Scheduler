import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description:
        "Terms governing product purchases, website use, and appointment bookings with Dr. Hasan Nasir.",
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
                        Terms &amp; Conditions
                    </h1>
                    <p className="mt-2.5 text-[0.92rem] text-ink-soft">
                        Last updated: 4 August 2026
                    </p>
                </div>
            </section>

            <section className="px-7 pb-20">
                <div className="mx-auto max-w-[720px]">
                    <p className="text-ink-soft">
                        These terms apply when you use drhasannasir.com or
                        shop.drhasannasir.com, purchase a product, or book an
                        appointment with Dr. Hasan Nasir. By placing an order or
                        completing a booking, you agree to these terms and the
                        policies linked below.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Seller and contact details
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        The products and appointment services are offered by Dr.
                        Hasan Nasir, Street 4, Chak 199, Gattwala, East Canal
                        Road, Faisalabad, Pakistan. Contact: +92 331 6507678 or{" "}
                        <a
                            href="mailto:drhasannasir12@gmail.com"
                            className="text-sage-deep hover:underline"
                        >
                            drhasannasir12@gmail.com
                        </a>
                        .
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Website information is not medical advice
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        General health, nutrition, and product information on
                        the websites is educational and does not replace
                        individual medical advice, diagnosis, or treatment.
                        Read the{" "}
                        <Link
                            href="/health-product-disclaimer"
                            className="text-sage-deep hover:underline"
                        >
                            Health Product Disclaimer
                        </Link>{" "}
                        before purchasing or using a wellness product.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Product information
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            Please read the full product description, ingredients,
                            net quantity, directions, warnings, storage
                            instructions, and expiry information before use.
                        </li>
                        <li>
                            Product packaging may differ slightly from website
                            images, but the product supplied should match the
                            material description and quantity shown at purchase.
                        </li>
                        <li>
                            Individual responses vary. We do not guarantee a
                            particular health, nutrition, or wellness result.
                        </li>
                        <li>
                            You must not buy products for unlawful resale,
                            misuse, or any prohibited purpose.
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Prices and availability
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Prices are displayed in Pakistani rupees unless stated
                        otherwise. Delivery charges and any applicable taxes or
                        fees are shown before you submit the order. Products,
                        prices, and availability may change. If a material
                        pricing or listing error affects your order, we will
                        contact you before fulfilment or cancel the affected item
                        and refund any amount already paid for it.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Orders and acceptance
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Submitting an order is an offer to purchase. An automated
                        acknowledgement confirms receipt, not acceptance. We may
                        decline or cancel an order before dispatch if a product
                        is unavailable, an address cannot be served, payment is
                        not authorized, fraud is suspected, a legal restriction
                        applies, or there is a material error in the listing or
                        price. If we cancel a paid order, we will refund the
                        affected amount.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Payment
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Payment must be completed using a method offered at
                        checkout. Payment processing is performed by the
                        provider identified there. We do not collect or store
                        full card or bank-account details. You confirm that you
                        are authorized to use the selected payment method and
                        that the information supplied is accurate.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Shipping, delivery, returns, and refunds
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Delivery areas, charges, handling, and delivery issues
                        are covered by our{" "}
                        <Link
                            href="/shipping-delivery-policy"
                            className="text-sage-deep hover:underline"
                        >
                            Shipping &amp; Delivery Policy
                        </Link>
                        . Eligibility and the process for product returns,
                        replacements, and refunds are covered by our{" "}
                        <Link
                            href="/refund-cancellation-policy"
                            className="text-sage-deep hover:underline"
                        >
                            Refund, Return &amp; Cancellation Policy
                        </Link>
                        . Those policies form part of these terms.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Appointment service
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        The website booking function is an administrative tool
                        for arranging an in-person consultation; it is not an
                        emergency or remote-diagnosis service. In an emergency,
                        contact emergency services or go to the nearest hospital.
                    </p>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            Consultations are normally offered 7 days a week from
                            12:00 PM to 2:30 PM, subject to availability.
                        </li>
                        <li>Each appointment slot is 10 minutes.</li>
                        <li>
                            An appointment is confirmed only after full advance
                            payment and confirmation from the clinic.
                        </li>
                        <li>
                            Patient-initiated requests are final after
                            confirmation: no cancellation, no rescheduling, and
                            no refund. If Dr. Hasan Nasir cancels, the advance
                            payment will be refunded in full.
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Acceptable use
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        You must not misuse the websites, attempt unauthorized
                        access, interfere with security or availability, submit
                        false information, place fraudulent orders, copy content
                        for commercial use, or use the service in violation of
                        law or another person&apos;s rights.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Intellectual property
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Unless otherwise stated, website text, branding, design,
                        photographs, graphics, and other content are owned by or
                        licensed to Dr. Hasan Nasir. They may not be reproduced
                        or commercially used without written permission.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Limitation of liability
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        To the maximum extent permitted by Pakistani law, Dr.
                        Hasan Nasir is not liable for indirect, incidental, or
                        consequential loss arising from website use, delivery
                        delay outside reasonable control, misuse of a product,
                        failure to follow label instructions, or interruptions
                        involving hosting, communications, couriers, or payment
                        providers.
                    </p>
                    <p className="mt-3 text-ink-soft">
                        Nothing in these terms excludes liability or consumer
                        rights that cannot lawfully be excluded, including
                        liability for fraud, wilful misconduct, gross negligence,
                        death, or personal injury where applicable. Where
                        liability cannot be excluded, aggregate liability is
                        limited, to the extent permitted by law, to the amount
                        paid for the affected product or appointment.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Events outside reasonable control
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We are not responsible for delay caused by events outside
                        reasonable control, including severe weather, transport
                        disruption, public emergencies, network outages, courier
                        disruption, or government action. We will take reasonable
                        steps to communicate and minimize the effect.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Governing law and disputes
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        These terms are governed by the laws of Pakistan. Please
                        contact us first so we can try to resolve a concern. Any
                        unresolved dispute will be subject to the courts and
                        competent consumer authorities having jurisdiction in
                        Faisalabad, Punjab, without limiting rights that apply
                        under mandatory law.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Changes
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We may update these terms from time to time. The terms
                        displayed when an order or booking is placed apply to
                        that transaction unless a change is required by law or
                        agreed with you.
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
