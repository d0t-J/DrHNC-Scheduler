import Link from "next/link";
import { FacebookIcon, YouTubeIcon } from "@/components/SocialIcons";

const policyLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    {
        href: "/refund-cancellation-policy",
        label: "Refund & Cancellation Policy",
    },
];

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61582055819875";
const YOUTUBE_URL = "https://www.youtube.com/@dr.hasannasir9200/";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-ink text-mist mt-6">
            <div className="mx-auto max-w-content px-7 pt-12 pb-8">
                <div className="flex flex-wrap justify-between gap-8">
                    {/* Left: legal identity + social */}
                    <div className="space-y-4">
                        <p className="text-sm text-mist/70 max-w-[38ch]">
                            [Business legal name] &middot; NTN [number] &middot;
                            [Registered address]
                        </p>
                        <div className="flex items-center gap-1">
                            <FacebookIcon
                                href={FACEBOOK_URL}
                                className="p-2 rounded-lg text-mist/60 hover:text-mist hover:bg-white/10"
                            />
                            <YouTubeIcon
                                href={YOUTUBE_URL}
                                className="p-2 rounded-lg text-mist/60 hover:text-mist hover:bg-white/10"
                            />
                        </div>
                    </div>

                    {/* Right: policy links */}
                    <nav
                        className="flex flex-col gap-3 sm:flex-row sm:gap-5 sm:items-start"
                        aria-label="Policy links"
                    >
                        {policyLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="text-[0.88rem] text-mist/70 no-underline hover:text-white transition-colors"
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
