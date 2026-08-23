"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "/booking", label: "Booking" },
    { href: "/products", label: "Products" },
    { href: "/#contact", label: "Contact" },
    { href: "/legal", label: "Legal" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60);
        handler(); // set initial state on mount
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-colors duration-300 ${
                scrolled
                    ? "bg-paper/90 backdrop-blur-sm border-b border-line-soft"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="mx-auto flex max-w-content items-center justify-between px-7 h-[72px]">
                {/* Brand */}
                <Link href="/" className="no-underline hover:no-underline">
                    <span className="font-display text-xl font-semibold tracking-wide text-ink leading-tight">
                        Dr. Hasan Nasir Cheema
                        <small className="block font-body text-[0.65rem] font-medium tracking-[0.08em] uppercase text-ink-soft">
                            Consultant Physician
                        </small>
                        <small className="block font-body text-[0.65rem] font-normal tracking-[0.08em] text-ink-soft mt-0.5">
                            MBBS · BMJ · M.Phil · Food &amp; Nutrition
                        </small>
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav
                    className="hidden md:flex items-center gap-8"
                    aria-label="Main navigation"
                >
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="text-[0.92rem] font-medium text-ink-soft no-underline hover:text-sage-deep hover:no-underline transition-colors"
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden rounded-lg border border-line px-3 py-2 text-ink text-sm font-medium"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? "Close" : "Menu"}
                </button>
            </div>

            {/* Mobile nav */}
            {open && (
                <nav
                    className={`md:hidden flex flex-col gap-4 px-7 pb-5 border-t border-line-soft ${
                        scrolled ? "bg-paper/90 backdrop-blur-sm" : "bg-paper"
                    }`}
                    aria-label="Mobile navigation"
                >
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="text-[0.92rem] font-medium text-ink-soft no-underline hover:text-sage-deep"
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
