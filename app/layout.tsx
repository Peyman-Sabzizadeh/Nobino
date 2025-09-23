import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}