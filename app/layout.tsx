/**
 * ================ D I A R Y ================
 * Script written by Istomin Mikhail
 * PoweredDeveloper <https://github.com/PoweredDeveloper>
 * Repository <https://github.com/PoweredDeveloper/school-diary>
 */

import type { Metadata } from "next";
import "./globals.css";

// Fonts
import { Commissioner } from 'next/font/google'

// Component
import Header from '@/app/components/Header'

const commissioner = Commissioner({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: "Дневник",
  description: "Расписание и Д/З для 11А класса",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`body-bg ${commissioner.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
