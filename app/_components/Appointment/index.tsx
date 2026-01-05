import { getFilterItems } from "@/app/_lib/actions/filter";
import AppointmentWrapper from "./components/AppointmentWrapper";
import { Suspense } from "react";

export default async function Appointment() {
  const filterData = await getFilterItems();
  return (
    <Suspense>
      <AppointmentWrapper filterData={filterData} />
    </Suspense>
  );
}
