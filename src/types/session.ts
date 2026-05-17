// Session type
interface Session {
  expiresAt: Date | string;
  token?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  ipAddress?: string | null;
  userAgent?: string | null;
  userId: string;
  impersonatedBy?: null | string;
  id: string;
}

// User type
interface User {
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  role?: 'user' | 'admin' | 'provider' | string; // Add other roles as needed
  banned?: boolean;
  banReason?: null | string;
  banExpires?: null | string | Date;
  restaurantId?: string | null;
  id: string;
}

// Complete session response type
// interface SessionResponse {
//   session: Session;
//   user: User;
// }

// Or if you want a more reusable approach with generics
export type SessionData = {
  session: Session;
  user: User;
};
