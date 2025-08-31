import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/layouts/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fullstack Take Home Task",
  description: "Full-Stack Take-Home Test: Todo List App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased dark`}>
        <Providers>
          <Header />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
