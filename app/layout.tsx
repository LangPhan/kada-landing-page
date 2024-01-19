import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kada | Homepage",
  description: "Backpack high quantity from Japan",
  authors: [{ name: "Kada Company", url: "kada.vn" }],
  keywords: ["kada", "backpack", "bag"],
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
