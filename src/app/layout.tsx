import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import localFont from "next/font/local";


const interDisplay = localFont({
  src: [
    { path: "../../public/fonts/Inter_28pt-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Inter_28pt-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Inter_28pt-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Inter_28pt-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-inter-display",
  display: "swap",
  weight: "100 900",
});

const interVariable = localFont({
  src: "../../public/fonts/Inter-Variable-Latin.woff2",
  variable: "--font-inter-variable",
  display: "swap",
  weight: "100 900",
});

export const metadata = {
  title: "Enfoke 360",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${interDisplay.variable} ${interVariable.variable}`}>
      <body className="bg-[#0f0f0f] text-white selection:bg-[#0b5cc5] selection:text-white min-h-screen flex flex-col font-sans">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
