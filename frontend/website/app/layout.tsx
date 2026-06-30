import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ConditionalNavFooter from "@/components/ConditionalNavFooter";

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-fraunces",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
    display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-ibm-plex-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Dr. Hasan Nasir Cheema — Appointment Booking",
        template: "%s | Dr. Hasan Nasir Cheema",
    },
    description:
        "Book a consultation with Dr. Hasan Nasir Cheema. Message us on WhatsApp or Messenger to schedule, confirm, and pay for your appointment.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}
        >
            <body className="flex min-h-screen flex-col">
                <ConditionalNavFooter>{children}</ConditionalNavFooter>
            </body>
        </html>
    );
}
