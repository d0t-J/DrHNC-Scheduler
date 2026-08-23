import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import { FacebookIcon, YouTubeIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
    title: "Dr. Hasan Nasir Cheema",
    description:
        "Book an in-person consultation with Dr. Hasan Nasir Cheema online, or browse health and wellness products from Shop Dr Hasan Nasir.",
};

const steps = [
    {
        title: "Choose an appointment",
        body: "Open the online booking page and choose an available date and time.",
    },
    {
        title: "Share your details",
        body: "Enter your contact details and the information requested for your appointment.",
    },
    {
        title: "Confirm with advance payment",
        body: "Complete full advance payment securely online to reserve your consultation.",
    },
    {
        title: "Receive your confirmation",
        body: "You'll receive a booking confirmation with your appointment details.",
    },
];

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61582055819875";
const YOUTUBE_URL = "https://www.youtube.com/@dr.hasannasir9200/";

export default function HomePage() {
    const waLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923316507678"}`;

    return (
        <>
            {/* ── Hero + About ────────────────────────────────────────── */}
            <div className="px-7 bg-gradient-to-b from-mist/60 via-mist/20 to-paper pb-4">
                <div className="mx-auto max-w-content">
                    <div className="md:grid md:grid-cols-[1fr_400px] md:gap-12 md:items-start">
                        {/* Hero text */}
                        <div>
                            <div className="pt-16 pb-14">
                                <span className="reveal font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                                    Appointment-based consultations
                                </span>
                                <h1 className="reveal reveal-d1 text-[clamp(2.1rem,4.6vw,3.4rem)] font-semibold leading-[1.08] max-w-[16ch] text-balance">
                                    Book your consultation with Dr. Hasan Nasir
                                    Cheema
                                </h1>
                                <p className="reveal reveal-d2 mt-5 max-w-[46ch] text-[1.1rem] text-ink-soft">
                                    Book your consultation online, choose an
                                    available appointment, and pay in advance to
                                    secure your time. You can also explore health
                                    and wellness products in our online shop.
                                </p>
                                <div className="reveal reveal-d3 mt-8 flex flex-wrap gap-4">
                                    <Link
                                        href="/booking"
                                        className="inline-flex items-center gap-2 rounded-full bg-honey px-6 py-3.5 text-[0.95rem] font-semibold text-white no-underline transition hover:bg-honey-deep hover:-translate-y-px hover:no-underline"
                                    >
                                        Book Now
                                    </Link>
                                    <Link
                                        href="/products"
                                        className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[0.95rem] font-semibold text-ink no-underline transition hover:border-ink hover:no-underline"
                                    >
                                        Visit the Shop
                                    </Link>
                                    <a
                                        href={waLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Message Dr. Hasan Nasir Cheema on WhatsApp"
                                        className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3.5 text-[0.95rem] font-semibold text-white no-underline transition hover:bg-sage-deep hover:-translate-y-px hover:no-underline"
                                    >
                                        Message on WhatsApp
                                    </a>
                                </div>

                                {/* Mobile photo — below CTAs, portrait, hidden on md+ */}
                                <div className="md:hidden mt-10 relative rounded-2xl overflow-hidden bg-mist aspect-[4/5] max-h-[420px] w-full">
                                    <Image
                                        src="/images/dr-hasan-nasir.jpg"
                                        alt="Dr. Hasan Nasir Cheema, Consultant Physician"
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Photo, desktop only */}
                        <div className="hidden md:block">
                            <div className="reveal reveal-d2 mt-16">
                                <div className="relative rounded-2xl overflow-hidden bg-mist aspect-[3/4] max-h-[540px]">
                                    <Image
                                        src="/images/dr-hasan-nasir.jpg"
                                        alt="Dr. Hasan Nasir Cheema, Consultant Physician"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                        sizes="400px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full-width introduction below the hero */}
                    <RevealSection
                        as="div"
                        id="about"
                        className="border-t border-line-soft py-18"
                    >
                        <div className="grid md:grid-cols-[200px_1fr] gap-10 items-start">
                            <div>
                                <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                                    About
                                </span>
                                <h2 className="mt-3 text-[clamp(1.4rem,2.6vw,1.8rem)] max-w-[18ch] font-semibold leading-snug">
                                    Healing through expertise,
                                    <br className="hidden md:block" />{" "}
                                    one patient at a time
                                </h2>
                            </div>
                            <div>
                                <p className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-sage-deep mb-6">
                                    <span>MBBS (King Edward)</span>
                                    <span aria-hidden="true">·</span>
                                    <span>BMJ England</span>
                                    <span aria-hidden="true">·</span>
                                    <span>M.Phil Human Biochem</span>
                                    <span aria-hidden="true">·</span>
                                    <span>Food and Nutrition Expert</span>
                                </p>
                                <div className="space-y-4 text-ink-soft text-[1.02rem]">
                                    <p>
                                        Dr. Hasan Nasir Cheema is a General
                                        Physician with over 15 years of clinical
                                        experience, with a special interest in
                                        gut and brain health, anxiety, and
                                        depression management. His approach to
                                        healthcare goes beyond treating symptoms,
                                        focusing on identifying underlying factors
                                        and helping patients develop sustainable
                                        habits around nutrition, movement, sleep,
                                        and lifestyle.
                                    </p>
                                    <p>
                                        Dr. Cheema believes that lasting health
                                        and wellbeing are built through healthy
                                        nutrition and balanced eating combined
                                        with regular physical activity and
                                        fitness. To support this holistic
                                        approach, he has dedicated nutritional
                                        and psychological support services
                                        through a specialized team, enabling
                                        patients to receive structured guidance
                                        alongside their medical care.
                                    </p>
                                    <p>
                                        A committed fitness enthusiast himself,
                                        Dr. Cheema emphasizes practical,
                                        evidence-informed guidance on healthy
                                        eating, nutrition, exercise, and physical
                                        activity as essential components of
                                        disease prevention and long-term
                                        wellbeing. Through his clinical practice
                                        and health education, he aims to help
                                        people understand their health better,
                                        make informed decisions, and build
                                        sustainable habits for a healthier life.
                                    </p>
                                    <p>
                                        Every appointment is booked online in
                                        advance, ensuring that your consultation
                                        time is reserved before you arrive.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </div>

            {/* ── How it works ─────────────────────────────────────────── */}
            <RevealSection
                id="how-it-works"
                className="px-7 py-18 border-t border-line-soft bg-mist/30"
            >
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                        How booking works
                    </span>
                    <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] max-w-[22ch]">
                        From online booking to confirmed appointment
                    </h2>
                    <ol className="mt-9 list-none p-0 m-0">
                        {steps.map((step, i) => (
                            <li
                                key={i}
                                className="grid grid-cols-[56px_1fr] gap-5 py-5 border-t border-line-soft first:border-t-0"
                            >
                                <span className="font-mono text-[1rem] font-semibold text-honey-deep pt-0.5">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="font-body text-[1.05rem] font-semibold text-ink">
                                        {step.title}
                                    </h3>
                                    <p className="mt-1.5 text-[0.96rem] text-ink-soft">
                                        {step.body}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </RevealSection>

            {/* ── Contact ──────────────────────────────────────────────── */}
            <RevealSection
                id="contact"
                className="px-7 py-18 border-t border-line-soft bg-paper"
            >
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                        Contact
                    </span>
                    <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)]">
                        Find us
                    </h2>

                    <div className="mt-8 grid sm:grid-cols-2 gap-7">
                        <div className="rounded-xl border border-line-soft bg-paper-raised p-5">
                            <p className="font-mono text-[0.75rem] tracking-[0.08em] uppercase text-ink-soft">
                                Address
                            </p>
                            <p className="mt-1.5 text-[1.02rem] text-ink">
                                Street 4, Chak 199, Gattwala,
                                <br />
                                East Canal Road, Faisalabad
                            </p>
                        </div>
                        <div className="rounded-xl border border-line-soft bg-paper-raised p-5">
                            <p className="font-mono text-[0.75rem] tracking-[0.08em] uppercase text-ink-soft">
                                Phone
                            </p>
                            <a
                                href={waLink}
                                target="_blank"
                                className="mt-1.5 block text-[1.02rem] text-sage-deep hover:underline"
                            >
                                +92 331 650 7678
                            </a>
                        </div>
                        <div className="rounded-xl border border-line-soft bg-paper-raised p-5">
                            <p className="font-mono text-[0.75rem] tracking-[0.08em] uppercase text-ink-soft">
                                Email
                            </p>
                            <a
                                href="mailto:drhasannasir12@gmail.com"
                                className="mt-1.5 block text-[1.02rem] text-sage-deep hover:underline"
                            >
                                drhasannasir12@gmail.com
                            </a>
                        </div>
                        <div className="rounded-xl border border-line-soft bg-paper-raised p-5">
                            <p className="font-mono text-[0.75rem] tracking-[0.08em] uppercase text-ink-soft">
                                Hours
                            </p>
                            <p className="mt-1.5 text-[1.02rem] text-ink">
                                Daily · 12:00–14:30
                            </p>
                        </div>
                    </div>

                    <div className="mt-7 rounded-xl overflow-hidden border border-line-soft">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.8272059622655!2d73.18560520034163!3d31.459656544815726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226f38bb013b57%3A0x87488e41a6ef259f!2sDr.%20Hasan%20Nasir%20Cheema%20Clinic!5e0!3m2!1sen!2s!4v1781973860487!5m2!1sen!2s"
                            width="100%"
                            height="360"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Dr. Hasan Nasir Cheema Clinic location"
                        />
                    </div>

                    {/* Social links */}
                    <div className="mt-8 flex items-center gap-3">
                        <span className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-ink-soft mr-1">
                            Follow
                        </span>
                        <FacebookIcon
                            href={FACEBOOK_URL}
                            className="p-2 rounded-lg hover:bg-mist"
                        />
                        <YouTubeIcon
                            href={YOUTUBE_URL}
                            className="p-2 rounded-lg hover:bg-mist"
                        />
                    </div>
                </div>
            </RevealSection>
        </>
    );
}
