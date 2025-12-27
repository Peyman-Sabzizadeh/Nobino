"use client";

import MobileFilter from "./MobileFilter";
import DesktopFilter from "./DesktopFilter";
import useIsMobile from "@/app/_hooks/useIsMobile";
import type { FilterDataType } from "@/app/_types/filter";
import { useSearchParams } from "next/navigation";

export default function AppointmentWrapper({
  filterData,
}: {
  filterData: FilterDataType;
}) {
  const searchParams = useSearchParams();
  const UrlFilters = Object.fromEntries(searchParams.entries());
  console.log(UrlFilters);
  const isMobile = useIsMobile();
  return (
    <div className="mt-2 grid grid-cols-[1fr_4fr] gap-3 max-md:grid-cols-1">
      {isMobile ? (
        <MobileFilter filterData={filterData} />
      ) : (
        <DesktopFilter filterData={filterData} />
      )}
      <div>Doctors</div>
    </div>
  );
}
