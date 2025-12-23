"use client";

import { useEffect } from "react";
import FilterSection from "./FilterSection";
import MobileFilter from "./MobileFilter";
import useIsMobile from "@/app/_hooks/useIsMobile";
import type { FilterDataType } from "@/app/_types/filter";
import { useSearchParams } from "next/navigation";
import { useFilterStore } from "@/app/_store/filterStore";

export default function AppointmentWrapper({
  filterData,
}: {
  filterData: FilterDataType;
}) {
  const searchParams = useSearchParams();
  const setProvince = useFilterStore((state) => state.setProvince);
  useEffect(() => {
    const province = searchParams.get("province");
    if (province) {
      setProvince(new Set([province]));
    }
  });
  const isMobile = useIsMobile();
  return (
    <div className="mt-2 grid grid-cols-[1fr_4fr] gap-3 max-md:grid-cols-1">
      {isMobile ? (
        <MobileFilter filterData={filterData} />
      ) : (
        <FilterSection filterData={filterData} />
      )}
      <div>Doctors</div>
    </div>
  );
}
