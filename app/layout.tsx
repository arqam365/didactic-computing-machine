import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import React from "react";
import AnalyticsWrapper from "@/components/analytics-wrapper";


const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HelloCloud",
  description: "HelloCloud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
        suppressHydrationWarning={true}
        lang="en">
    <AnalyticsWrapper />
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
