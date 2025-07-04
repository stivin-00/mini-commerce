import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini-Commerce",
  description: "Tiny e-commerce shop demo",
  openGraph: {
    title: "Mini-Commerce",
    description: "Tiny e-commerce shop built with Next.js, React Query, Zustand.",
    images: [{ url: "/vercel.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ReactQueryProvider>
          <main className="flex-grow container mx-auto p-4">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
