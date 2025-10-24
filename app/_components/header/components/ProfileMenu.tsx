"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { User } from "lucide-react";

export default function ProfileMenu() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="shadow">
          <User size="21px" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded">
        <DropdownItem key="پروفایل من">پروفایل من</DropdownItem>
        <DropdownItem key="وضعیت رزرو ها">وضعیت رزرو ها</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
