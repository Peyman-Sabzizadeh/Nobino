"use client"

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
            className={`"md:text-default-300 transition-all" flex items-center justify-center rounded-lg bg-gray-500 dark:bg-transparent p-1 text-white md:p-1.5 ${link.hoverColor}`}
          >
            <span className="inline-block size-6 md:size-8">{link.icon}</span>
          </Link>
        </Tooltip>
      ))}
    </div>
  );
}
