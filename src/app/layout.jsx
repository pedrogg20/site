import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pedro Elias - Portfólio de Designer Gráfico",
  description:
    "Designer gráfico criativo especializado em identidade visual, design web e experiências digitais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
