import { Divider } from "@heroui/react";
import Filters from "./Filters";
import FilterHeader from "./FilterHeader";
import type { FilterDataType } from "@/app/_types/filter";

export default function DesktopFilter({
  filterData,
}: {
  filterData: FilterDataType;
}) {
  return (
    <div className="space-y-2 rounded-lg bg-gray-200 p-4 dark:bg-gray-600">
      <FilterHeader />
      <Divider />
      <Filters filterData={filterData} />
    </div>
  );
}
