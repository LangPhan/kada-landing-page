import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kada",
  description: "Backpack high quantity from Japan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
