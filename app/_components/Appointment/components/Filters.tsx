import type { FilterDataType } from "@/app/_types/filter";
import FilterItem from "./FilterItem";
import { useFilterStore } from "@/app/_store/filterStore";

export default function Filters({
  filterData,
}: {
  filterData: FilterDataType;
}) {
  const {
    uniqueProvinces,
    uniqueCities,
    uniqueSpecialty,
    uniqueExperience_years,
  } = filterData;

  const province = useFilterStore((state) => state.province);
  const hasProvince = [...province][0] === "همه";

  return (
    <>
      <FilterItem title="استان" items={uniqueProvinces} storeKey="province" />
      <FilterItem
        title="شهر"
        items={uniqueCities}
        storeKey="city"
        hasProvince={hasProvince}
      />
      <FilterItem title="تخصص" items={uniqueSpecialty} storeKey="specialty" />
      <FilterItem
        title="سابقه(سال)"
        items={uniqueExperience_years}
        storeKey="experience"
      />
    </>
  );
}
