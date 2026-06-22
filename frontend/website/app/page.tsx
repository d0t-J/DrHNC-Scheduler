import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import { FacebookIcon, YouTubeIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
    title: "Dr. Hasan Nasir Cheema — Appointment Booking",
    description:
        "Book a consultation with Dr. Hasan Nasir Cheema, Consultant Physician. Message us on WhatsApp or Messenger to find a time, confirm your slot, and pay in advance.",
};

const steps = [
    {
        title: "Send a message",
        body: "Message the clinic on WhatsApp or Messenger and let us know you'd like to book a consultation.",
    },
    {
        title: "We propose a time",
        body: "We'll check availability and propose a slot within consultation hours.",
    },
    {
        title: "Secure it with advance payment",
        body: "Appointments are confirmed once payment is made in full and in advance, processed securely through GoPayFast.",
    },
    {
        title: "Get your confirmation",
        body: "You'll receive a confirmation message, plus a reminder ahead of your appointment time.",
    },
];

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61582055819875";
const YOUTUBE_URL = "https://www.youtube.com/@dr.hasannasir9200/";

export default function HomePage() {
    const waLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923316507678"}`;

    return (
        <>
            {/*
             * ── Hero + About: shared sticky-photo wrapper ──────────────
             *
             * Desktop: two-column grid.
             *   Left  — hero text, then about text stacked vertically.
             *   Right — photo with position:sticky, top = navbar (72px) + gap (16px).
             *           Releases when the right column's bottom edge passes top-[88px],
             *           i.e. exactly when the About section ends.
             *
             * Mobile: right column is hidden (hidden md:block). Left column is
             *         full-width, no sticky applies anywhere.
             */}
            <div className="px-7 bg-gradient-to-b from-mist/60 via-mist/20 to-paper pb-4">
                <div className="mx-auto max-w-content">
                    <div className="md:grid md:grid-cols-[1fr_400px] md:gap-12 md:items-start">

                        {/* ── Left column ─────────────────────────────── */}
                        <div>
                            {/* Hero text */}
                            <div className="pt-16 pb-14">
                                <span className="reveal font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                                    Appointment-based consultations
                                </span>
                                <h1 className="reveal reveal-d1 text-[clamp(2.1rem,4.6vw,3.4rem)] font-semibold leading-[1.08] max-w-[16ch] text-balance">
                                    Book your consultation with Dr. Hasan Nasir
                                    Cheema
                                </h1>
                                <p className="reveal reveal-d2 mt-5 max-w-[46ch] text-[1.1rem] text-ink-soft">
                                    Message us on WhatsApp or Facebook Messenger
                                    to find a time, confirm your slot, and pay in
                                    advance to secure your appointment — no
                                    waiting room, no guesswork.
                                </p>
                                <div className="reveal reveal-d3 mt-8 flex flex-wrap gap-4">
                                    <a
                                        href={waLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-honey px-6 py-3.5 text-[0.95rem] font-semibold text-white no-underline transition hover:bg-honey-deep hover:-translate-y-px hover:no-underline"
                                    >
                                        Message on WhatsApp
                                    </a>
                                    <Link
                                        href="/booking"
                                        className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[0.95rem] font-semibold text-ink no-underline transition hover:border-ink hover:no-underline"
                                    >
                                        How booking works
                                    </Link>
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

                            {/* About — scroll-triggered reveal, div not section
                                (already inside the outer two-column section context) */}
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
                                            Healing through expertise,<br className="hidden md:block" /> one patient at a time
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
                                            Dr. Hasan Nasir Cheema is a Consultant
                                            Physician with over 15 years of
                                            clinical experience. An Assistant
                                            Professor at Allied Hospital
                                            Faisalabad, he brings both academic
                                            rigour and practical depth to every
                                            consultation. His approach goes beyond
                                            treating symptoms — he works with
                                            patients to build lasting habits around
                                            nutrition, movement, and lifestyle that
                                            prevent disease and support long-term
                                            wellbeing.
                                        </p>
                                        <p>
                                            A committed fitness enthusiast
                                            himself, Dr. Cheema believes that
                                            practical guidance on diet and
                                            exercise is as important as any
                                            prescription. He regularly shares
                                            evidence-informed health and fitness
                                            insights to help people make better
                                            decisions every day.
                                        </p>
                                        <p>
                                            Every appointment is booked in
                                            advance through WhatsApp or Messenger,
                                            so your consultation time is reserved
                                            before you arrive.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </RevealSection>
                        </div>

                        {/* ── Right column: photo, desktop only ─── */}
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
                        From message to confirmed appointment
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
                                Street 4, Chak 199, Gattwala,<br />
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
