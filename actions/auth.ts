import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string; // Add custom field to session.user
      name?: string;
      email?: string;
      image?: string;
    };
  }
}
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt", // Default is JWT, you can switch to "database" if using a DB
    maxAge: 30 * 24 * 60 * 60, // 30 days (session expiration)
    updateAge: 24 * 60 * 60, // Update session every 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add user ID to token
      }
      return token;
    },
    // Session callback: Called when session is accessed
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string; // Add ID to session.user
      }
      return session;
    },
  },
};
export default authOptions;
