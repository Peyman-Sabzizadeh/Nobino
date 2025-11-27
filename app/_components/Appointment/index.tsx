import { getProvinces } from "@/app/_lib/actions/filter";
import Filter from "./components/Filter";

export default async function Appointment() {
  const Provinces = await getProvinces();

  return (
    <div className="mt-2 grid grid-cols-[1fr_4fr] gap-3 max-md:grid-cols-1">
      <div className="rounded-lg bg-gray-200 p-4 dark:bg-gray-600">
        <Filter title="استان" items={Provinces} />
      </div>
      <div>Doctors</div>
    </div>
  );
}
