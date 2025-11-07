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

export default function ProfileMenu({ size = "md", iconSize = "20px" }: ButtonType) {
  return (
    <Dropdown>
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
