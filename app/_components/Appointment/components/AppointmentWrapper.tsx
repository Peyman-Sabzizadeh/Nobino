"use client";

import type { FilterDataType } from "@/app/_types/filter";
import { useSearchParams } from "next/navigation";
import { useFilterStore } from "@/app/_store/filterStore";
import { useEffect } from "react";
import MobileFilter from "./filters/MobileFilter";
import DesktopFilter from "./filters/DesktopFilter";
import useIsMobile from "@/app/_hooks/useIsMobile";
import DoctorsList from "./doctors/DoctorsList";

export default function AppointmentWrapper({
  filterData,
}: {
  filterData: FilterDataType;
}) {
  const searchParams = useSearchParams();
  const UrlFilters = Object.fromEntries(searchParams.entries());
  const setProvince = useFilterStore((state) => state.setProvince);
  const setCity = useFilterStore((state) => state.setCity);
  const setSpecialty = useFilterStore((state) => state.setSpecialty);
  const setExperience = useFilterStore((state) => state.setExperience);
  useEffect(() => {
    setProvince(new Set([UrlFilters.province || "همه"]));
    setCity(new Set([UrlFilters.city || "همه"]));
    setSpecialty(new Set([UrlFilters.specialty || "همه"]));
    setExperience(new Set([UrlFilters.experience || "همه"]));
  });
  const isMobile = useIsMobile();
  return (
    <div className="mt-2 grid grid-cols-[1fr_4fr] gap-3 max-md:grid-cols-1">
      {isMobile ? (
        <MobileFilter filterData={filterData} />
      ) : (
        <DesktopFilter filterData={filterData} />
      )}
      <DoctorsList />
    </div>
  );
}
