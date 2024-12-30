import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Draggax - Soluções de tecnologia e marketing",
  description:
    "Draggax oferece soluções de sites para aumentar suas vendas e expandir sua presença online. Conheça nossos planos Elite, Advanced, Start e personalizado.",
  keywords: [
    "site draggax",
    "draggax site",
    "marketing digital",
    "aumento de vendas",
    "SEO",
    "Draggax",
    "landing page",
    "soluções online",
    "draggax",
    "site online",
    "comprar site",
    "site campos dos goytacazes",
    "site em campos",
    "site campos",
    "criar site",
    "comprar sistema",
    "Comprar sistema",
    "Comprar software",
    "comprar software",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${robotoFlex.variable} antialiased`}>{children}</body>
    </html>
  );
}
