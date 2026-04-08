import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raphael Xavier | Desenvolvedor",
  description:
    "Portfólio de Raphael Xavier — desenvolvedor em formação, apaixonado por tecnologia e interfaces web modernas.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "react",
    "next.js",
    "typescript",
    "python",
    "portfólio",
  ],
  authors: [{ name: "Raphael Xavier" }],
  openGraph: {
    title: "Raphael Xavier | Desenvolvedor",
    description: "Portfólio de Raphael Xavier, desenvolvedor apaixonado por tecnologia.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
