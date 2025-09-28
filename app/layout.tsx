import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./_providers/providers";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}