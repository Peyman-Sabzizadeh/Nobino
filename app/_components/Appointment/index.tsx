import FilterSection from "./components/FilterSection";

export default async function Appointment() {
  return (
    <div className="mt-2 grid grid-cols-[1fr_4fr] gap-3 max-md:grid-cols-1">
      <FilterSection />
      <div>Doctors</div>
    </div>
  );
}
