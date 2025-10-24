import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Providers } from "./_providers/providers";

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
      <body
        className={`${vazirmatn.className} mx-auto min-h-screen max-w-7xl px-2`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
