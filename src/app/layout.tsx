import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import { Figtree, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Foodie — Order Food Online",
    template: "%s | Foodie",
  },
  description:
    "Foodie is your ultimate food delivery platform. Discover top-rated restaurants, explore delicious meals, and get food delivered fast to your doorstep.",
  keywords: [
    "food delivery",
    "order food online",
    "restaurants",
    "meals",
    "Foodie",
  ],
  authors: [{ name: "Foodie" }],
  creator: "Foodie",
  metadataBase: new URL("https://foodie-client-one.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://foodie-client-one.vercel.app",
    siteName: "Foodie",
    title: "Foodie — Order Food Online",
    description:
      "Discover top-rated restaurants and get your favourite meals delivered fast.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodie — Order Food Online",
    description:
      "Discover top-rated restaurants and get your favourite meals delivered fast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        figtree.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
