import { DefaultSession, getServerSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id?: User["id"]; // Add custom field to session.user
      name?: User["name"];
      email?: User["email"];
      image?: string;
      sub?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: User["id"];
    name?: User["name"];
    email?: User["email"];
    picture?: string;
  }
}

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
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
        const dbUser = await prisma.user.findUnique({
          where: {
            id: user.id,
          },
        });
        if (dbUser) {
          token.id = dbUser.id;
          token.name = dbUser.name || undefined;
          token.email = dbUser.email || undefined;
          token.picture = dbUser.image || undefined;
        }
      }
      console.log(token);
      return token;
    },
    // Session callback: Called when session is accessed
    async session({ session, token }) {
      console.log("Token in session:", token);
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.picture as string;
        session.user.sub = token.sub as string;
      }
      console.log(session);
      return session;
    },
  },
};
export default authOptions;

export const getServerAuthSessions = () => getServerSession(authOptions);
