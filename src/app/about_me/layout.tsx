import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me | Vaggelis Bobonhs",
  description: "Learn more about my journey, skills, and experience in web development.",
}

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 