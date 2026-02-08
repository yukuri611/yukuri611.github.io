import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | AI Computing Researcher",
  description:
    "Portfolio of an AI Computing researcher specializing in processor architecture, computational systems, and AI model optimization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
