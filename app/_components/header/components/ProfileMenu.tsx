"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

import { ButtonType } from "@/app/_types/button";
import { User } from "lucide-react";

export default function ProfileMenu({
  size = "md",
  iconSize = "20px",
}: ButtonType) {
  return (
    <Dropdown className="mt-3 min-w-36 font-light">
      <DropdownTrigger>
        <Button isIconOnly variant="shadow" size={size}>
          <User size={iconSize} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded">
        <DropdownItem key="پروفایل من">پروفایل من</DropdownItem>
        <DropdownItem key="وضعیت رزرو ها">وضعیت رزرو ها</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
