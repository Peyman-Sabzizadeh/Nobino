"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { ChevronDown } from "lucide-react";

type Menu = {
  trigger: string;
  items: string[];
};

export default function Menu({ trigger, items }: Menu) {
  return (
    <Dropdown className="mt-3 min-w-36">
      <DropdownTrigger>
        <Button variant="shadow" className="flex gap-x-0.5">
          <ChevronDown size="18px" />
          {trigger}
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="flat">
        {items?.map((item) => (
          <DropdownItem key={item}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
