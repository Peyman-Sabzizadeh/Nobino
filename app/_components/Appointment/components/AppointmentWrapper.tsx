"use client";

import MobileFilter from "./MobileFilter";
import DesktopFilter from "./DesktopFilter";
import useIsMobile from "@/app/_hooks/useIsMobile";
import { useSearchParams } from "next/navigation";
import { useFilterStore } from "@/app/_store/filterStore";
import type { FilterDataType } from "@/app/_types/filter";
import { useEffect } from "react";

export default function AppointmentWrapper({
  filterData,
}: {
  filterData: FilterDataType;
}) {
  const searchParams = useSearchParams();
  const setProvince = useFilterStore((state) => state.setProvince);
  useEffect(() => {
    const province = searchParams.get("province");
    const [key, value] = searchParams.entries();
    console.log(key, value);
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
        <DesktopFilter filterData={filterData} />
      )}
      <div>Doctors</div>
    </div>
  );
}
