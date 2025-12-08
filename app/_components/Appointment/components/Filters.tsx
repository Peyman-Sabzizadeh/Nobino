import FilterItem from "./FilterItem";
import { getFilterItems } from "@/app/_lib/actions/filter";

export default async function Filters() {
  const {
    uniqueProvinces,
    uniqueCities,
    uniqueSpecialty,
    uniqueExperience_years,
  } = await getFilterItems();
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
