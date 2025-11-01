import type { Metadata } from "next";
import Header from "./_components/header/Header";
import Footer from "./_components/foter/Footer";
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Онлайн-онвертер валют, мер длины, веса, объёма",
    template: "Онлайн-конвертер %s "
  },
  description: "Универсальный онлайн-конвертер — все виды конвертаций в одном месте: валюты, длины, объёма, веса. Точные расчёты за секунды, простой интерфейс."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col items-center justify-between">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
