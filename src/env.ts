import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Server-side environment variables (not exposed to the browser)
   */
  server: {
    DATABASE_URL: z.string(),
    BETTER_AUTH_SECRET: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
  },

  /*
   * Client-side environment variables (prefixed with NEXT_PUBLIC_)
   */
  client: {
    NEXT_PUBLIC_BETTER_AUTH_URL: z.string(),
    NEXT_PUBLIC_APP_URL: z.string(),
  },

  /*
   * Automatically treat all NEXT_PUBLIC_ variables as client.
   * If you have additional client variables, add them to `client`.
   */
  runtimeEnv: {
    // Server vars
    DATABASE_URL: process.env.DATABASE_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    // Client vars
    NEXT_PUBLIC_BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },

  /*
   * Optional: skip validation in development for faster builds
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
