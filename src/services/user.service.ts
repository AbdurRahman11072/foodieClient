import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import type { SessionData } from "@/types/session";

const userService = {
  getUserSession: async (): Promise<SessionData | null> => {
    const SessionData = await auth.api.getSession({
      headers: await headers(),
    });

    return SessionData as any;
  },
};

export default userService;

import { cookies } from "next/headers";

const extendedUserService = {
  ...userService,
  getAllUsers: async (page: number = 1, limit: number = 10) => {
    try {
      const cookieStore = await cookies();
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}users?${params.toString()}`,
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

export { extendedUserService as userService };
