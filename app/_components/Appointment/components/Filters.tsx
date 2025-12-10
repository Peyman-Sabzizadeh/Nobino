import type { FilterDataType } from "@/app/_types/filter";
import FilterItem from "./FilterItem";

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
  return (
    <>
      <FilterItem title="استان" items={uniqueProvinces} storeKey="province" />
      <FilterItem title="شهر" items={uniqueCities} storeKey="city" />
      <FilterItem title="تخصص" items={uniqueSpecialty} storeKey="specialty" />
      <FilterItem
        title="سابقه(سال)"
        items={uniqueExperience_years}
        storeKey="experience"
      />
    </>
  );
}
