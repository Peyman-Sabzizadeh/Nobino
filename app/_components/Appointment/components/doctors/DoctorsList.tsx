import { Stethoscope } from "lucide-react";
import Doctor from "./Doctor";
import { Divider } from "@heroui/react";

export default function DoctorsList() {
  return (
    <div className="space-y-2 rounded-lg bg-gray-200 p-4 dark:bg-gray-600">
      <h3 className="flex items-center gap-1 text-center">
        <Stethoscope size="18px" />
        دکترها
      </h3>
      <Divider />
      <Doctor />
      <Doctor />
      <Doctor />
    </div>
  );
}
