import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Shipping & Delivery Policy",
    description:
        "Delivery areas, charges, order handling, and delivery issue reporting for Shop Dr Hasan Nasir.",
};

export default function ShippingDeliveryPolicyPage() {
    return (
        <>
            <section className="px-7 pt-16 pb-8">
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                        Shop policy
                    </span>
                    <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold">
                        Shipping &amp; Delivery Policy
                    </h1>
                    <p className="mt-2.5 text-[0.92rem] text-ink-soft">
                        Last updated: 24 August 2026
                    </p>
                </div>
            </section>

            <section className="px-7 pb-20">
                <div className="mx-auto max-w-[720px]">
                    <p className="text-ink-soft">
                        This policy applies to physical products ordered from
                        shop.drhasannasir.com. Appointment bookings are not
                        shipped and are governed by the appointment terms in our{" "}
                        <Link
                            href="/terms-of-service"
                            className="text-sage-deep hover:underline"
                        >
                            Terms &amp; Conditions
                        </Link>
                        .
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Delivery areas
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We deliver to addresses accepted by the shop checkout.
                        Availability may vary by city, postal area, courier
                        coverage, product, and order size. If checkout does not
                        offer delivery to an address, contact us before ordering
                        and we will confirm whether an alternative is available.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Delivery charges and estimates
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Available delivery methods, charges, and any estimated
                        delivery period are shown at checkout or communicated
                        with the order confirmation. Estimates are not guaranteed
                        and begin after payment and order verification. Remote
                        areas, weekends, public holidays, weather, transport
                        disruption, and courier capacity may extend delivery.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Order processing
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Orders are prepared after payment is confirmed. We may
                        contact you to verify an order, payment, phone number, or
                        delivery address. Dispatch may be delayed until requested
                        verification is completed. If an item becomes unavailable
                        before dispatch, we will contact you to arrange a suitable
                        replacement or refund the unavailable item.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Address and contact details
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        You are responsible for providing a complete and accurate
                        recipient name, telephone number, delivery address, city,
                        and any directions reasonably needed by the courier.
                        Contact us immediately if a correction is required. We
                        cannot guarantee a change after dispatch.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Tracking and delivery
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Tracking information will be shared when supported by
                        the courier. Delivery may require a signature, one-time
                        code, telephone confirmation, or another proof of receipt.
                        Responsibility for the parcel passes to you or your
                        nominated recipient when delivery is recorded at the
                        supplied address.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Inspecting your order
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Inspect the outer package and products promptly after
                        delivery. Do not consume a product if its container is
                        leaking, its seal is broken, it appears tampered with, or
                        it is expired. Keep the parcel, courier label, product,
                        packaging, and invoice while a claim is reviewed.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Delayed, missing, or damaged delivery
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Contact us if tracking shows an unexplained delay, the
                        parcel is marked delivered but was not received, or it
                        arrives damaged. For visible damage or an incorrect,
                        tampered, leaking, or expired product, notify us within
                        7 calendar days of delivery and include your order number
                        and clear photographs. The process is explained in our{" "}
                        <Link
                            href="/refund-cancellation-policy"
                            className="text-sage-deep hover:underline"
                        >
                            Refund, Return &amp; Cancellation Policy
                        </Link>
                        .
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Failed delivery and returned parcels
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        If delivery fails because the address or telephone number
                        was incorrect, the recipient was unavailable, or the
                        parcel was refused without a valid product issue, we may
                        charge the actual re-delivery cost or deduct unrecoverable
                        courier charges from an otherwise available refund. We
                        will contact you before re-dispatch to confirm the cost.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Contact
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        For delivery help, email{" "}
                        <a
                            href="mailto:drhasannasir12@gmail.com"
                            className="text-sage-deep hover:underline"
                        >
                            drhasannasir12@gmail.com
                        </a>{" "}
                        or call +92 331 6507678. Include your order number if
                        one was provided in your order confirmation.
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
