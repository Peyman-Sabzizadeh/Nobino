import { FilterIcon } from "lucide-react";
import ResetFilters from "./ResetFilters";

export default function FilterHeader() {
  return (
    <div className="flex items-center justify-between">
      <h3 className="flex items-center justify-center gap-1 text-center">
        <FilterIcon size="18px" />
        فیلتر
      </h3>
      <ResetFilters />
    </div>
  );
}
