import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AdminAccess from "@/components/admin-access";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Abhishek Patidar",
  description: "A modern portfolio showcasing software engineering projects and skills",
  keywords: ["portfolio", "software engineering", "developer", "react", "nextjs", "typescript"],
  authors: [{ name: "Abhishek Patidar" }],
  openGraph: {
    title: "Portfolio - Abhishek Patidar",
    description: "A modern portfolio showcasing software engineering projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
        <AdminAccess />
      </body>
    </html>
  );
}
