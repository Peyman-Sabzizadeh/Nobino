import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  size?: string;
  type: "logo-name" | "logo";
};

export default function Logo({ size, type }: LogoProps) {
  return (
    <Link href="/" className="relative inline-block h-14 w-30">
      <Image
        priority
        fill
        sizes={size || "400px"}
        src={type === "logo-name" ? "/logo/logo-name.png" : "/logo/logo.png"}
        alt="لوگوی نوبینو"
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}
