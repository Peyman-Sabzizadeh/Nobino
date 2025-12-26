import Appointment from "@/app/_components/Appointment";
import type { searchParamsType } from "@/app/_types/filter";

export default async function AppointmentPage({
  searchParams,
}: searchParamsType) {
  const filters = await searchParams;
  console.log(filters);
  return <Appointment />;
}
