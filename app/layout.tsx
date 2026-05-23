import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monkscroft Advisory",
  description:
    "Strategic advisory across electrification, battery systems and industrial decarbonisation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
