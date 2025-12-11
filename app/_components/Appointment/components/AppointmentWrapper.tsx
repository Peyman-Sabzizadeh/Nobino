"use client";

import FilterSection from "./FilterSection";
import MobileFilter from "./MobileFilter";
import useIsMobile from "@/app/_hooks/useIsMobile";
import type { FilterDataType } from "@/app/_types/filter";

export default function AppointmentWrapper({
  filterData,
}: {
  filterData: FilterDataType;
}) {
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
