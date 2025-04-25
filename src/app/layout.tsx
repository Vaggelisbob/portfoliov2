import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Vercel deployment trigger: 2023-06-21T14:55:00Z - Testing GitHub Actions workflow

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaggelis Bobonhs",
  description: "Personal portfolio and professional showcase",
  icons: {
    icon: [
      {
        url: "/portfolio.png",
        type: "image/svg+xml",
      }
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
