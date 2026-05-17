import { env } from "@/env";
import { cookies } from "next/headers";

export const userService = {
  getUserSession: async () => {
    try {
      const cookieStore = await cookies();

      // Get the specific Better Auth session cookie

      const res = await fetch(
        `${env.NEXT_PUBLIC_BACKEND_BETTER_AUTH_URL}get-session`,
        {
          headers: {
            "Content-Type": "application/json",
            Cookie: cookieStore.toString(),
          },

          cache: "no-store",
        },
      );

      const session = await res.json();
      console.log(session);
      return session || null;
    } catch (error) {
      console.error("Session fetch error:", error);
      return null;
    }
  },

  getAllUsers: async (page: number = 1, limit: number = 10) => {
    try {
      const cookieStore = await cookies();
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());

      const res = await fetch(
        `${env.NEXT_PUBLIC_BACKEND_API_URL}users?${params.toString()}`,
        {
          headers: {
            Cookie: cookieStore.toString(),
          },
          next: { tags: ["AllUsers"] },
        },
      );
      const data = await res.json();

      if (!res.ok) {
        return { success: false, data: { data: [], total: 0 } };
      }

      return data;
    } catch {
      return {
        success: false,
        message: "Something went wrong",
        data: { data: [], total: 0 },
      };
    }
  },
};
