import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

import { Providers } from "@/app/_providers/providers";
import Header from "@/app/_components/header/Header";
import Footer from "@/app/_components/footer/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "نوبینو: دستیار هوشمند شما برای رزرو نوبت",
  description:
    "نوبینو؛ همراه هوشمند شما برای رزرو نوبت‌ها به‌سادگی، با سرعت و اطمینان کامل، تجربه‌ای راحت و مطمئن در مدیریت نوبت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={vazirmatn.className}>
        <Providers>
          <div className="container mx-auto px-4">
            <Header />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
