import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Summarizer",
  description: "File Summarizer , Text Summarizer and Video Summarizer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <footer>
          <div className="container mx-auto px-4 py-8 text-center text-gray-500">
            <p className="text-sm">
              Made with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              by{" "}
            <span className="font-medium">Sharad</span>
            </p>
            </div>
        </footer>
      </body>
    </html>
  );
}
