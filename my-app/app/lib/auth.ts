// app/lib/auth.ts
import prisma from "@/app/lib/prisma";
import { Account, AuthOptions, Profile, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT } from "next-auth/jwt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your@email.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        const { email, password } = credentials;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
          return null;
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    async encode({ secret, token }) {
      if (!token) throw new Error("No token to encode");
      return jwt.sign(token, secret);
    },
    async decode({ secret, token }) {
      if (!token) throw new Error("No token to decode");
      const decoded = jwt.verify(token, secret);
      return typeof decoded === "string" ? JSON.parse(decoded) : decoded;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.id = user.id as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email;
      }
      return session;
    },
  },
};
