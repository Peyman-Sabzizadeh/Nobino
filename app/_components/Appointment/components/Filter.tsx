"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import type { Selection } from "@heroui/react";
import type { FilterType } from "@/app/_types/filter";

import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";

export default function Filter({ title, items }: FilterType) {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["ایران"]),
  );

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );

  return (
    <div className="flex items-center justify-between">
      <h4>{title} :</h4>
      <Dropdown className="min-w-40 max-h-60">
        <DropdownTrigger>
          <Button variant="shadow" className="flex gap-x-1">
            {selectedValue}
            <ChevronDown size="18px" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
        className="overflow-y-auto"
          disallowEmptySelection
          aria-label="Single selection example"
          selectedKeys={selectedKeys}
          selectionMode="single"
          variant="flat"
          onSelectionChange={setSelectedKeys}
        >
          {items.map((item) => (
            <DropdownItem key={item}>{item}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
