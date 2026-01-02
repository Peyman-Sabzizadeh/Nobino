"use client";

import { useFilterStore } from "@/app/_store/filterStore";
import type { ResetFilterType } from "@/app/_types/filter";
import { Button, Tooltip } from "@heroui/react";
import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function ResetFilters({ title }: ResetFilterType) {
  const { province, city, specialty, experience, resetFilters } =
    useFilterStore();

  const router = useRouter();
  const pathname = usePathname();

  function onPressHandler() {
    resetFilters();
    router.replace(pathname);
  }

  const isAllDefault =
    province instanceof Set &&
    city instanceof Set &&
    specialty instanceof Set &&
    experience instanceof Set &&
    province.has("همه") &&
    city.has("همه") &&
    specialty.has("همه") &&
    experience.has("همه");

  if (isAllDefault) return null;

  return (
    <Tooltip content="حذف فیلترها">
      <Button
        isIconOnly={title ? false : true}
        variant={title ? "ghost" : "flat"}
        size="sm"
        color="danger"
        aria-label="حذف فیلترها"
        onPress={onPressHandler}
      >
        {title || <X size="20px" />}
      </Button>
    </Tooltip>
  );
}
