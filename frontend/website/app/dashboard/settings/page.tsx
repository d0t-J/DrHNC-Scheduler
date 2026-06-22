import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SettingsView from "@/components/dashboard/SettingsView";

export const metadata = {
    title: "Settings — Dashboard",
    robots: { index: false, follow: false },
};

export default async function SettingsPage() {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/dashboard/login");
    if (session.user.role !== "doctor") redirect("/dashboard");

    return <SettingsView />;
}
