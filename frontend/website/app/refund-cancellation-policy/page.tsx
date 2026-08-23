import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Refund, Return & Cancellation Policy",
    description:
        "Returns and refunds for products, plus cancellation terms for appointments with Dr. Hasan Nasir.",
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
                        Refund, Return &amp; Cancellation Policy
                    </h1>
                    <p className="mt-2.5 text-[0.92rem] text-ink-soft">
                        Last updated: 24 August 2026
                    </p>
                </div>
            </section>

            <section className="px-7 pb-20">
                <div className="mx-auto max-w-[720px]">
                    <p className="text-ink-soft">
                        This policy separates physical product orders from
                        appointment bookings. Different rules apply to each.
                        Nothing in this policy limits a right or remedy that
                        cannot be excluded under applicable consumer law.
                    </p>

                    <div className="rounded-xl border border-sage/30 bg-sage/10 px-6 py-5 mt-8 mb-10">
                        <p className="font-semibold text-[1.05rem] text-ink">
                            Product problem? Contact us within 7 calendar days
                            of delivery.
                        </p>
                        <p className="mt-1 text-ink-soft text-[0.95rem]">
                            Keep the product, packaging, invoice, and clear
                            photographs while we review the request. Do not use
                            a product that appears damaged, tampered with, or
                            expired.
                        </p>
                    </div>

                    <h2 className="text-[1.3rem] font-display font-semibold text-ink">
                        Eligible product problems
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        A product is eligible for review when it is:
                    </p>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>Different from the product or quantity ordered</li>
                        <li>Materially damaged or leaking when delivered</li>
                        <li>Unsealed or visibly tampered with on arrival</li>
                        <li>Expired when delivered</li>
                        <li>
                            Materially defective or not as described on the
                            product page
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Products that cannot be returned
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Because the shop sells food, wellness, and consumable
                        products, we cannot accept change-of-mind returns. We
                        also cannot accept a return after a container or seal has
                        been opened, the product has been used, or storage and
                        handling after delivery cannot be verified, unless the
                        product was defective, unsafe, expired, or otherwise not
                        compliant when supplied.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        How to request help
                    </h2>
                    <ol className="mt-3 space-y-2 pl-5 list-decimal text-ink-soft">
                        <li>
                            Email{" "}
                            <a
                                href="mailto:drhasannasir12@gmail.com"
                                className="text-sage-deep hover:underline"
                            >
                                drhasannasir12@gmail.com
                            </a>{" "}
                            or call +92 331 6507678 within 7 calendar days of
                            delivery.
                        </li>
                        <li>
                            Provide the order number, product name, delivery
                            date, and a clear description of the issue.
                        </li>
                        <li>
                            Attach clear photographs or video showing the product,
                            batch and expiry information, seal, outer packaging,
                            and courier label where relevant.
                        </li>
                        <li>
                            Wait for return or disposal instructions. Do not send
                            a product back without authorization.
                        </li>
                    </ol>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Review and resolution
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We may ask for additional information or arrange a return
                        before deciding a claim. We will tell you in writing
                        whether the claim is accepted. For an accepted claim, we
                        will either replace the affected product or refund its
                        price. If a replacement is unavailable, we will refund
                        the affected product price and any basic delivery charge
                        paid specifically for that product. We issue approved
                        refunds to the original payment method within 14
                        business days after approval. Your bank or payment
                        provider may take additional time to post the amount.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Incorrect address, refusal, and failed delivery
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        If delivery fails because the address or contact details
                        supplied were incorrect, the recipient was unavailable,
                        or a correctly supplied order was refused, additional
                        delivery or return charges may be deducted from a refund
                        or charged before re-dispatch. We will tell you the
                        amount before making that charge or deduction. This does
                        not apply where the failure was our error or the
                        courier&apos;s confirmed mishandling.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Order cancellation
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        A physical product order can be cancelled only before it
                        is dispatched. Contact us immediately if you need to
                        cancel. Once an order has been dispatched, it cannot be
                        cancelled. If we cancel a paid product order because an
                        item is unavailable, an address cannot be served, or a
                        listing error occurred, the cancelled amount will be
                        refunded.
                    </p>

                    <div className="rounded-xl border border-ink/20 bg-ink text-paper px-6 py-5 mt-14 mb-10">
                        <p className="font-semibold text-[1.05rem]">
                            Confirmed appointments are final.
                        </p>
                        <p className="mt-1 text-paper/80 text-[0.95rem]">
                            Once an appointment is confirmed and payment is
                            received, patient-initiated cancellation,
                            rescheduling, and refunds are not available.
                        </p>
                    </div>

                    <h2 className="text-[1.3rem] font-display font-semibold text-ink">
                        Appointment cancellations and refunds
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            Advance payments are non-refundable once an
                            appointment is confirmed, including in cases of
                            illness, a scheduling conflict, personal emergency,
                            late arrival, or non-attendance.
                        </li>
                        <li>
                            A confirmed appointment cannot be moved, transferred,
                            or rescheduled by the patient.
                        </li>
                        <li>
                            If Dr. Hasan Nasir cancels a confirmed appointment,
                            the advance payment will be refunded in full.
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Questions
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Please contact us before ordering if you need help
                        understanding product suitability, delivery, or this
                        policy. Product information does not replace advice from
                        a qualified healthcare professional; see the{" "}
                        <Link
                            href="/health-product-disclaimer"
                            className="text-sage-deep hover:underline"
                        >
                            Health Product Disclaimer
                        </Link>
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
