"use client";

import { Divider } from "@heroui/react";
import { HeartHandshake } from "lucide-react";
import Link from "next/link";
import SocialMediaLinks from "./components/SocialMediaLinks";
import FooterCredits from "./components/FooterCredits";

export default function Footer() {
  return (
    <footer className="md:text-medium mt-2 flex flex-col justify-between gap-6 rounded-sm bg-[#0384c6] py-5 px-10 text-sm text-amber-50 dark:bg-gray-600">
      <p className="flex gap-2">
        <HeartHandshake />
        هر قدمی که برمی‌داریم با هدف ساختن دنیایی مطمئن‌تر برای شماست. نوبینو
        یعنی اعتماد، آرامش و همراهی.
      </p>
      <Divider />
      <div className="flex flex-wrap items-center justify-between gap-9 *:flex *:flex-col *:space-y-3 md:flex-row">
        <div>
          <p className="mb-4 text-xl font-bold">دسترسی سریع</p>
          <Link href="/">خانه</Link>
          <Link href="/">رزرو نوبت</Link>
          <Link href="/">نوبت های من</Link>
          <Link href="/">درباره ما</Link>
        </div>
        <div>
          <p className="mb-4 text-xl font-bold">پزشکان</p>
          <Link href="/">محبوب ترین های سال</Link>
          <Link href="/">پر مراجعه ترین ها</Link>
          <Link href="/">پزشکان با سابقه</Link>
          <Link href="/">پزشکان جدید</Link>
        </div>
        <div>
          <p className="mb-4 text-xl font-bold">قوانین و مقررات</p>
          <Link href="/">قوانین استفاده</Link>
          <Link href="/">حریم خصوصی</Link>
          <Link href="/">شکایات</Link>
          <Link href="/">پشتیبانی</Link>
        </div>
        <div>
          <p className="mb-4 text-xl font-bold">خدمات مشتریان</p>
          <Link href="/">پرسش های متداول</Link>
          <Link href="/">پیگیری نوبت</Link>
          <Link href="/">راهنمای رزرو نوبت</Link>
          <Link href="/">تماس با ما</Link>
        </div>
      </div>
      <Divider />
      <div className="flex flex-wrap items-center justify-between">
        <h3>ارتباط با ما :</h3>
        <SocialMediaLinks />
      </div>
      <Divider />
      <FooterCredits />
    </footer>
  );
}
