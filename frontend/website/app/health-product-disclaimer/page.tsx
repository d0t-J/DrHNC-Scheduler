import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Health Product Disclaimer",
    description:
        "Important health and safety information for food, nutrition, and wellness products sold by Shop Dr Hasan Nasir.",
};

export default function HealthProductDisclaimerPage() {
    return (
        <>
            <section className="px-7 pt-16 pb-8">
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                        Important information
                    </span>
                    <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold">
                        Health Product Disclaimer
                    </h1>
                    <p className="mt-2.5 text-[0.92rem] text-ink-soft">
                        Last updated: 4 August 2026
                    </p>
                </div>
            </section>

            <section className="px-7 pb-20">
                <div className="mx-auto max-w-[720px]">
                    <div className="rounded-xl border border-honey/35 bg-honey/10 px-6 py-5 mb-10">
                        <p className="font-semibold text-[1.05rem] text-ink">
                            Products and website content are not a substitute for
                            individual medical advice.
                        </p>
                        <p className="mt-1 text-ink-soft text-[0.95rem]">
                            A product should not be used to diagnose, treat,
                            cure, or prevent a disease unless that use is
                            specifically authorized and stated on its approved
                            label.
                        </p>
                    </div>

                    <h2 className="text-[1.3rem] font-display font-semibold text-ink">
                        General information only
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Product descriptions, articles, images, and other website
                        content provide general educational and commercial
                        information. They do not create a doctor-patient
                        relationship and are not an individual assessment,
                        prescription, diagnosis, or treatment plan.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Speak with a qualified healthcare professional
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Seek professional advice before using a food supplement,
                        herbal, fiber, algae, or other wellness product if you:
                    </p>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            are pregnant, trying to become pregnant, or
                            breastfeeding
                        </li>
                        <li>are under 18 or are buying for a child</li>
                        <li>
                            have an allergy, chronic illness, digestive condition,
                            kidney or liver condition, or another medical concern
                        </li>
                        <li>
                            take prescription medicine, over-the-counter medicine,
                            or another supplement
                        </li>
                        <li>
                            are preparing for surgery or are under active medical
                            treatment
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Use products safely
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            Read the ingredient list, allergen information,
                            directions, warnings, storage instructions, batch
                            information, and expiry date before use.
                        </li>
                        <li>
                            Use only the stated serving or amount unless a
                            qualified healthcare professional advises otherwise.
                        </li>
                        <li>
                            Do not use a product if the seal is broken, packaging
                            appears tampered with, the product is damaged, or the
                            expiry date has passed.
                        </li>
                        <li>
                            Keep products out of reach of children and store them
                            as directed on the label.
                        </li>
                        <li>
                            Food and nutrition products should complement, not
                            replace, a varied and balanced diet unless medically
                            directed.
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Results vary
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Nutrition and wellness outcomes vary between individuals
                        and depend on diet, health, medicine use, lifestyle, and
                        other factors. Testimonials, general descriptions, and
                        references to possible benefits are not guarantees of a
                        result.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Adverse reactions and emergencies
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Stop using a product and seek medical advice if you
                        experience an unexpected or concerning reaction. For a
                        severe allergic reaction, breathing difficulty, loss of
                        consciousness, or another emergency, contact emergency
                        services or go to the nearest hospital immediately. Do
                        not rely on this website, email, WhatsApp, Messenger, or
                        the appointment form for emergency assistance.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Product quality concern
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        If a delivered product is leaking, damaged, unsealed,
                        tampered with, expired, or different from what you
                        ordered, do not use it. Keep the product and packaging
                        and contact us within 7 calendar days under the{" "}
                        <Link
                            href="/refund-cancellation-policy"
                            className="text-sage-deep hover:underline"
                        >
                            Refund, Return &amp; Cancellation Policy
                        </Link>
                        .
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Professional consultation
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Booking an appointment is separate from purchasing a
                        product. A website order does not establish a
                        doctor-patient relationship. A professional relationship
                        begins only through an actual consultation accepted by
                        Dr. Hasan Nasir and is subject to the applicable booking
                        terms.
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
