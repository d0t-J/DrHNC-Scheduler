import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        default: "Dr. Hasan Nasir Cheema",
        template: "%s | Dr. Hasan Nasir Cheema",
    },
    description:
        "Book an in-person consultation with Dr. Hasan Nasir Cheema online, or browse health and wellness products from Shop Dr Hasan Nasir.",
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
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
