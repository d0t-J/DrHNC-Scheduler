import NextAuth from "next-auth";

// Stage 2: configure a real provider here (e.g. CredentialsProvider or EmailProvider).
// For now this skeleton satisfies the /api/auth/* route shape so the dashboard
// sign-in link doesn't 404.
const handler = NextAuth({
  providers: [],
  pages: {
    signIn: "/dashboard",
  },
});

export { handler as GET, handler as POST };
