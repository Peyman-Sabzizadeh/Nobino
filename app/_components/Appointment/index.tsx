import { getFilterItems } from "@/app/_lib/actions/filter";
import AppointmentWrapper from "./components/AppointmentWrapper";

export default async function Appointment() {
  const filterData = await getFilterItems();
  return <AppointmentWrapper filterData={filterData} />;
}
