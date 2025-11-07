import Link from "next/link";
import Image from "next/image";

export default function Logo({ type }: { type: "logo-name" | "logo" }) {
  return (
    <Link href="/" className="relative inline-block h-14 w-25">
      <Image
        priority
        fill
        sizes="400px"
        src={type === "logo-name" ? "/logo/logo-name.png" : "/logo/logo.png"}
        alt="لوگوی نوبینو"
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}
