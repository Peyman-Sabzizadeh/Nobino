"use client";

import useIsMobile from "@/app/_hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { CalendarCheck } from "lucide-react";

export default function Hero() {
  const isMobile = useIsMobile();
  return (
    <div
      className="relative mt-2 w-full"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <Image
        priority
        fill
        src="/hero.jpg"
        alt="hero"
        className="rounded-lg object-cover object-top brightness-[0.25]"
      />
      <div
        className={`${isMobile && "flex-col justify-center gap-8 p-4"} absolute inset-0 flex items-center justify-around text-amber-50`}
      >
        <div>
          <h1
            className={`${isMobile && "text-[24px]"} mb-4 text-4xl font-bold`}
          >
            نوبت گیری آسان تر از همیشه
          </h1>
          <p className={`${isMobile && "text-sm"} mb-6`}>
            با نوبینو، نوبت پزشک خود را با خیال راحت در سریع ترین زمان ممکن رزرو
            کنید.
          </p>
        </div>
        <Button as={Link} href="/" color="primary" variant="shadow" size="lg">
          <CalendarCheck size="20px" />
          رزرو نوبت
        </Button>
      </div>
    </div>
  );
}
