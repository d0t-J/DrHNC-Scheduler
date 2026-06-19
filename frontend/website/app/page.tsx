import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Dr. Hasan Nasir Cheema — Appointment Booking",
    description:
        "Book a consultation with Dr. Hasan Nasir Cheema. Message us on WhatsApp or Messenger to find a time, confirm your slot, and pay in advance.",
};

const steps = [
    {
        title: "Send a message",
        body: "Message the clinic on WhatsApp or Messenger and let us know you'd like to book a consultation.",
    },
    {
        title: "We propose a time",
        body: "We'll check availability within the 11:00–14:00 consultation window and propose a slot.",
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

export default function HomePage() {
    const waLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""}`;

    return (
        <>
            {/* Hero */}
            <section className="px-7 pt-20 pb-14">
                <div className="mx-auto max-w-content">
                    <span className="reveal font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                        Appointment-based consultations
                    </span>
                    <h1 className="reveal reveal-d1 text-[clamp(2.1rem,4.6vw,3.4rem)] font-semibold leading-[1.08] max-w-[16ch] text-balance">
                        Book your consultation with Dr. Hasan Nasir Cheema
                    </h1>
                    <p className="reveal reveal-d2 mt-5 max-w-[46ch] text-[1.1rem] text-ink-soft">
                        Message us on WhatsApp or Facebook Messenger to find a
                        time, confirm your slot, and pay in advance to secure
                        your appointment — no waiting room, no guesswork.
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
                </div>
            </section>

            {/* About */}
            <section
                id="about"
                className="px-7 py-18 border-t border-line-soft"
            >
                <div className="mx-auto max-w-content">
                    <div className="grid md:grid-cols-[1.1fr_1.4fr] gap-14">
                        <div>
                            <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                                About
                            </span>
                            <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] max-w-[22ch]">
                                A focused practice, by appointment only
                            </h2>
                        </div>
                        <div className="space-y-4 text-ink-soft text-[1.02rem]">
                            <p>
                                <span className="rounded bg-mist px-1.5 py-0.5 font-mono text-[0.85em] text-sage-deep">
                                    [1–2 sentence bio: Dr. Hasan Nasir
                                    Cheema&apos;s qualifications, specialty, and
                                    years in practice]
                                </span>
                            </p>
                            <p>
                                Every appointment is booked in advance through
                                WhatsApp or Messenger, so your consultation time
                                is reserved before you arrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section
                id="how-it-works"
                className="px-7 py-18 border-t border-line-soft"
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
            </section>

            {/* Contact */}
            <section
                id="contact"
                className="px-7 py-18 border-t border-line-soft"
            >
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                        Contact
                    </span>
                    <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)]">
                        Find us
                    </h2>
                    <div className="mt-8 grid sm:grid-cols-2 gap-7">
                        {[
                            {
                                label: "Address",
                                value: "[Clinic street address, city]",
                            },
                            { label: "Phone", value: "[Clinic phone number]" },
                            {
                                label: "Email",
                                value: "[contact@yourdomain.com]",
                            },
                            {
                                label: "Hours",
                                value: "[Days open] · 11:00–14:00",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-xl border border-line-soft bg-paper-raised p-5"
                            >
                                <p className="font-mono text-[0.75rem] tracking-[0.08em] uppercase text-ink-soft">
                                    {item.label}
                                </p>
                                <p className="mt-1.5 text-[1.02rem] text-ink">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
