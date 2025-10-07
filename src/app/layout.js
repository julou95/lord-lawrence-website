import { Geist, Geist_Mono, Anton_SC } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const antonSC = Anton_SC({
  variable: "--font-anton-sc",
  weight: "400",
  subsets: ["latin"],
})

export const metadata = {
  title: "Lord Lawrence & The Lard Guitar",
  description: "This is the Website of the allmighty Lord Lawrence & The Lard Guitar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${antonSC.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
