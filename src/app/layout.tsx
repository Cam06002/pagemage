import type { Metadata } from "next";
import { Della_Respira } from "next/font/google";
import "./globals.css";

const della = Della_Respira({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const metadata: Metadata = {
  title: "PageMage",
  description: "There's Magic to Discover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={della.className}
      >
        {children}
      </body>
    </html>
  );
}
