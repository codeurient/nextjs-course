import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* 1) header ve footer component-lerini bayaqa PAGE.TSX faylina elave etmisdik. Yəni bayaq ANA SEHIFE de sadece gorurduk ve diger sehifelere kecid etdikde silinirdi.
        Eger butun sehifelerde eyni component-lerin tekrarlanmasini isteyirikse onda tekrarlanmasini istediyimiz hisseleri LAYOUT.TSX faylina elave etmek lazimdir. */}
        <Header/>

        {children}
      
        <Footer/>

      </body>
    </html>
  );
}
