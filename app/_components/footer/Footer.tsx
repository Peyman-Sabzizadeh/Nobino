"use client";

import { Divider } from "@heroui/react";
import { HeartHandshake } from "lucide-react";
import Link from "next/link";
import SocialMediaLinks from "./components/SocialMediaLinks";

export default function Footer() {
  return (
    <div className="mt-2 flex flex-col justify-between gap-6 rounded-sm bg-blue-500 p-4 text-amber-50 dark:bg-indigo-500">
      <p className="flex gap-2">
        <HeartHandshake />
        هر قدمی که برمی‌داریم با هدف ساختن دنیایی مطمئن‌تر برای شماست. نوبینو
        یعنی اعتماد، آرامش و همراهی.
      </p>
      <Divider />
      <div className="flex items-center justify-around *:flex *:flex-col">
        <div className="space-y-3">
          <p className="mb-4 text-xl font-bold">دسترسی سریع</p>
          <Link href="/">خانه</Link>
          <Link href="/">رزرو نوبت</Link>
          <Link href="/">نوبت های من</Link>
          <Link href="/">درباره ما</Link>
        </div>
        <div className="space-y-3">
          <p className="mb-4 text-xl font-bold">خدمات مشتریان</p>
          <Link href="/">پرسش های متداول</Link>
          <Link href="/">پیگیری نوبت</Link>
          <Link href="/">راهنمای رزرو نوبت</Link>
          <Link href="/">تماس با ما</Link>
        </div>
        <div className="space-y-3">
          <p className="mb-4 text-xl font-bold">قوانین و مقررات</p>
          <Link href="/">قوانین استفاده</Link>
          <Link href="/">حریم خصوصی</Link>
          <Link href="/">شکایات</Link>
          <Link href="/">پشتیبانی</Link>
        </div>
      </div>
      <Divider />
      <div className="flex flex-wrap items-center justify-around">
        <h3>ارتباط با ما :</h3>
        <SocialMediaLinks />
      </div>
      <Divider />
    </div>
  );
}
