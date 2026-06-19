import Link from "next/link";

const policyLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/refund-cancellation-policy", label: "Refund & Cancellation Policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-mist mt-6">
      <div className="mx-auto max-w-content px-7 pt-12 pb-8">
        <div className="flex flex-wrap justify-between gap-6">
          {/* Legal identity — placeholders must match Meta BM + GoPayFast registration exactly */}
          <p className="text-sm text-mist/70 max-w-[38ch]">
            [Business legal name] &middot; NTN [number] &middot; [Registered address]
          </p>

          <nav className="flex flex-wrap gap-5" aria-label="Policy links">
            {policyLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.88rem] text-mist no-underline hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-7 border-t border-mist/15 pt-4 text-[0.78rem] text-mist/50">
          &copy; {year} [Business legal name]. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
