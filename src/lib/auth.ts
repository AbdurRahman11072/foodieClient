import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  // additional fields are added to the user model, and can be accessed in your app via `auth.user`
  user: {
    additionalFields: {
      restaurantId: {
        type: "string",
      },
    },
  },
  plugins: [admin(), nextCookies()],
  trustHost: process.env.NODE_ENV !== "development",
});
