import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enfoke 360 | Agencia de Diseño y Desarrollo Web",
  description: "Agencia de Diseño Web. Profesionales en diseño de sitios web para empresas, diseñadores UX/UI y SEO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#0f0f0f] selection:bg-[#0b5cc5] selection:text-white">
        {children}
      </body>
    </html>
  );
}
