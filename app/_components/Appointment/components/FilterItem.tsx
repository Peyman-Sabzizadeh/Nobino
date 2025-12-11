"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import type { FilterType } from "@/app/_types/filter";

import { useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { useFilterStore } from "@/app/_store/filterStore";
import useIsMobile from "@/app/_hooks/useIsMobile";

export default function FilterItem({ title, items, storeKey }: FilterType) {
  const isMobile = useIsMobile();
  const selectedKeys = useFilterStore((s) => s[storeKey]);
  const setSelectedKeys = useFilterStore((state) => {
    if (storeKey === "province") return state.setProvince;
    if (storeKey === "city") return state.setCity;
    if (storeKey === "specialty") return state.setSpecialty;
    if (storeKey === "experience") return state.setExperience;
  });

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );

  return (
    <div className="flex items-center justify-between">
      <h4>{title} :</h4>
      <Dropdown className="max-h-60 min-w-40">
        <DropdownTrigger>
          <Button
            variant={isMobile ? "flat" : "shadow"}
            className="flex gap-x-1"
            aria-label={`Select ${title}`}
          >
            {selectedValue}
            <ChevronDown size="18px" />
          </Button>
        </DropdownTrigger>

        <DropdownMenu
          className="overflow-y-auto"
          disallowEmptySelection
          aria-label="Single selection example"
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          variant="flat"
        >
          {items.map((item) => (
            <DropdownItem textValue={title} key={item}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
