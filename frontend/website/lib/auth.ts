import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export type DashboardRole = "doctor" | "operator";

interface DashboardUser {
    id: string;
    email: string;
    role: DashboardRole;
}

const ACCOUNTS: DashboardUser[] = [
    {
        id: "doctor",
        email: process.env.DASHBOARD_DOCTOR_EMAIL ?? "",
        role: "doctor",
    },
    {
        id: "operator",
        email: process.env.DASHBOARD_OPERATOR_EMAIL ?? "",
        role: "operator",
    },
];

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const account = ACCOUNTS.find(
                    (a) => a.email !== "" && a.email === credentials.email
                );
                if (!account) return null;

                const hashEnvKey =
                    account.role === "doctor"
                        ? process.env.DASHBOARD_DOCTOR_PASSWORD_HASH
                        : process.env.DASHBOARD_OPERATOR_PASSWORD_HASH;

                if (!hashEnvKey) return null;

                const valid = await bcrypt.compare(
                    credentials.password,
                    hashEnvKey
                );
                if (!valid) return null;

                return { id: account.id, email: account.email, role: account.role };
            },
        }),
    ],
    pages: {
        signIn: "/dashboard/login",
    },
    session: { strategy: "jwt" },
    callbacks: {
        jwt({ token, user }) {
            if (user) token.role = (user as DashboardUser).role;
            return token;
        },
        session({ session, token }) {
            if (session.user) {
                (session.user as DashboardUser & typeof session.user).role =
                    token.role as DashboardRole;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};
