import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="relative inline-block h-15 w-30">
      <Image
        priority
        fill
        sizes="400px"
        src="/logo/logo.png"
        alt="لوگوی نوبینو"
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}
