"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

import { useFilterStore } from "@/app/_store/filterStore";
import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";

import type { FilterType } from "@/app/_types/filter";
import type { Selection } from "@heroui/react";

export default function Filter({ title, items, storeKey }: FilterType) {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["همه"]));

  const setFilter = useFilterStore((state) => {
    if (storeKey === "province") return state.setProvince;
    if (storeKey === "city") return state.setCity;
    if (storeKey === "specialty") return state.setSpecialty;
    if (storeKey === "experience") return state.setExperience;
  });

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );

  const handleSelection = (keys: Selection) => {
    setSelectedKeys(keys);
    const value = Array.from(keys)[0] as string;
    if (setFilter) {
      setFilter(new Set([value]));
    }
  };

  return (
    <div className="flex items-center justify-between">
      <h4>{title} :</h4>
      <Dropdown className="max-h-60 min-w-40">
        <DropdownTrigger>
          <Button variant="shadow" className="flex gap-x-1">
            {selectedValue}
            <ChevronDown size="18px" />
          </Button>
        </DropdownTrigger>

        <DropdownMenu
          className="overflow-y-auto"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={handleSelection}
        >
          {items.map((item) => (
            <DropdownItem key={item}>{item}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
