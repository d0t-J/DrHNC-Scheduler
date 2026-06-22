import "next-auth";
import "next-auth/jwt";
import type { DashboardRole } from "@/lib/auth";

declare module "next-auth" {
    interface Session {
        user: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
            role: DashboardRole;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role?: DashboardRole;
    }
}
