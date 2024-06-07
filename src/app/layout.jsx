import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Speed Structural",
  description: "Pedimensionamiento de elementos estructurales y metrado de cargas automático",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
