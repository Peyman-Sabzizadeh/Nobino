"use client";

import { useFilterStore } from "@/app/_store/filterStore";
import { Button, Tooltip } from "@heroui/react";
import { X } from "lucide-react";

export default function ResetFilters() {
  const resetFilters = useFilterStore((state) => state.resetFilters);
  return (
    <Tooltip content="حذف فیلترها">
      <Button
        isIconOnly
        variant="flat"
        size="sm"
        color="danger"
        aria-label="حذف فیلترها"
        onPress={resetFilters}
      >
        <X size="20px" />
      </Button>
    </Tooltip>
  );
}
