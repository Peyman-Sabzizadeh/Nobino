import Appointment from "@/app/_components/Appointment";
import { getDataBySelectedFilters } from "@/app/_lib/actions/filter";

export default async function AppointmentPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // const { province } = await searchParams;
  // The below fetching is just for test
  const selectedData = getDataBySelectedFilters();
  console.log(selectedData);
  return <Appointment />;
}
