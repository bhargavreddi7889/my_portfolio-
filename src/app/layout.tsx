import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhargav - AI & Web Developer Portfolio",
  description: "Hi, I'm Bhargav, I build AI + MERN stack applications. Final year B.Tech IT student specializing in AI, ML, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
