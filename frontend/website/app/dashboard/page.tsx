import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import AppointmentsView from "@/components/dashboard/AppointmentsView";

export const metadata = {
    title: "Dashboard",
    robots: { index: false, follow: false },
};

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/dashboard/login");

    return <AppointmentsView role={session.user.role} />;
}
