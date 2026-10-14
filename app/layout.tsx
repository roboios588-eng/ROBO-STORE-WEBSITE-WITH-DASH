import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROBO MODS STORE",
  description:
    "Digital products, customer accounts and reseller access.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
