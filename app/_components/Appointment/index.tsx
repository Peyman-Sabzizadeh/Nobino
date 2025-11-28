import { getFilterItems } from "@/app/_lib/actions/filter";
import Filter from "./components/Filter";
import { Divider } from "@heroui/react";
import { FilterIcon } from "lucide-react";

export default async function Appointment() {
  const {
    uniqueProvinces,
    uniqueCities,
    uniqueSpecialty,
    uniqueExperience_years,
  } = await getFilterItems();

  return (
    <div className="mt-2 grid grid-cols-[1fr_4fr] gap-3 max-md:grid-cols-1">
      <div className="space-y-2 rounded-lg bg-gray-200 p-4 dark:bg-gray-600">
        <h3 className="text-center flex items-center gap-1 justify-center">
          <FilterIcon size="18px" />
          فیلتر
        </h3>
        <Divider />
        <Filter title="استان" items={uniqueProvinces} />
        <Filter title="شهر" items={uniqueCities} />
        <Filter title="تخصص" items={uniqueSpecialty} />
        <Filter title="سابقه(سال)" items={uniqueExperience_years} />
      </div>
      <div>Doctors</div>
    </div>
  );
}
