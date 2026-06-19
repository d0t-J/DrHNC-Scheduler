import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book an Appointment",
    description:
        "Book a consultation with Dr. Hasan Nasir Cheema via WhatsApp or Facebook Messenger. Step-by-step guide to securing your appointment slot.",
};

const steps = [
    {
        title: "Message us",
        body: "Start a conversation on WhatsApp or Facebook Messenger. Tell us you'd like to book a consultation.",
    },
    {
        title: "Share your details",
        body: "We'll ask for your name, contact number, and the reason for your visit.",
    },
    {
        title: "Receive a slot proposal",
        body: "We check availability in the 11:00–14:00 window and propose a time that works.",
    },
    {
        title: "Pay in advance",
        body: "Confirm the slot by completing advance payment via GoPayFast — your appointment is reserved only once payment clears.",
    },
    {
        title: "Get your confirmation",
        body: "We send a confirmation message and a reminder before your appointment time.",
    },
];

export default function BookingPage() {
    const waLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""}`;
    const messengerLink = `https://m.me/${process.env.NEXT_PUBLIC_PAGE_ID ?? ""}`;

    return (
        <>
            {/* Hero */}
            <section className="px-7 pt-20 pb-14 border-b border-line-soft">
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                        Booking
                    </span>
                    <h1 className="text-[clamp(2.1rem,4.6vw,3.4rem)] font-semibold leading-[1.08] max-w-[20ch] text-balance">
                        How to book an appointment
                    </h1>
                    <p className="mt-5 max-w-[46ch] text-[1.1rem] text-ink-soft">
                        All appointments are arranged through WhatsApp or
                        Facebook Messenger. The process takes a few minutes and
                        your slot is secured once payment is complete.
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section className="px-7 py-18">
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                        The process
                    </span>
                    <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] max-w-[22ch]">
                        Five steps from message to confirmed slot
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

            {/* CTAs */}
            <section className="px-7 py-18 border-t border-line-soft bg-mist/40">
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                        Start here
                    </span>
                    <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] max-w-[22ch]">
                        Ready to book? Message us now
                    </h2>
                    <p className="mt-4 max-w-[44ch] text-ink-soft">
                        Choose whichever platform you prefer — both go to the
                        same team.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-honey px-6 py-3.5 text-[0.95rem] font-semibold text-white no-underline transition hover:bg-honey-deep hover:-translate-y-px hover:no-underline"
                        >
                            Message us on WhatsApp
                        </a>
                        <a
                            href={messengerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[0.95rem] font-semibold text-ink no-underline transition hover:border-ink hover:no-underline"
                        >
                            Message us on Messenger
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
