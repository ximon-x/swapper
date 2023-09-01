import "./globals.css";
import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swapper",
  description: "NFT Swapper developed by Simon Samuel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
