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
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/portfolio.png", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/portfolio.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: [
      { url: "/portfolio.png" }
    ]
  },
  appleWebApp: {
    capable: true,
    title: "Vaggelis Bobonhs",
    statusBarStyle: "black-translucent"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/portfolio.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/portfolio.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/portfolio.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
