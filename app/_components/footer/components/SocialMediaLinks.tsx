import { socialLinks } from "@/app/_data/socialLinks";
import { Tooltip } from "@heroui/react";
import Link from "next/link";

export default function SocialMediaLinks() {
  return (
    <div className="flex flex-wrap space-x-2">
      {socialLinks.map((link) => (
        <Tooltip key={link.name} content={link.name} showArrow>
          <Link
            href={link.url}
            target="_blank"
            aria-label={link.name}
            className={`"md:text-default-300 transition-all" flex items-center justify-center rounded-lg bg-gray-500 p-1.5 text-white ${link.hoverColor}`}
          >
            <span className="inline-block size-8">{link.icon}</span>
          </Link>
        </Tooltip>
      ))}
    </div>
  );
}
