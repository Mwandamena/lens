import { db } from "@social-lens/db"
import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { organization } from "better-auth/plugins"

export const auth = betterAuth({
  database: prismaAdapter(db, { provider: "postgresql" }),

  emailAndPassword: { enabled: true },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      prompt: "select_account", 
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    twitter: {
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    },
  },

  plugins: [
    organization({
      allowUserToCreateOrganization: true,
    }),
  ],

  session: {
    expiresIn: 60 * 60 * 24 * 30,        
    updateAge: 60 * 60 * 24,  
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5,        
    },
  },

  baseURL: process.env.BASE_URL,

  trustedOrigins: [
    process.env.WEB_URL ?? "http://localhost:3000",
    process.env.GATEWAY_URL ?? "http://localhost:4000",
    "http://localhost:3001",
  ],
})

export type Auth = typeof auth