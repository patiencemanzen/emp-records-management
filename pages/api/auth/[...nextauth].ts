import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

declare module "next-auth" {
  interface User {
    firstName: string;
    lastName: string;
  }

  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
    };
  }
}

const authorizeUser = async (
  credentials: Record<"email" | "password", string> | undefined
) => {
  if (!credentials || !credentials.email || !credentials.password) {
    throw new Error("No credentials provided");
  }

  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email: credentials.email },
  });

  if (!user) {
    throw new Error("No user found with this email");
  }

  // Verify password
  const isValid = await bcrypt.compare(credentials.password, user.password);
  if (!isValid) {
    throw new Error("Invalid password");
  }

  return user;
};

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "user@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: authorizeUser,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
