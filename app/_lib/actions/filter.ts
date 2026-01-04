import { supabase } from "@/app/_lib/supabase";

export async function getFilterItems() {
  const { data: FilterItems, error } = await supabase
    .from("Doctors")
    .select("province, city, specialty, experience_years");

  if (error) throw new Error("Filter items could be loaded");

  const Provinces = FilterItems.map((item) => item.province);
  const uniqueProvinces = [...new Set(Provinces)].sort();

  const Cities = FilterItems.map((item) => item.city);
  const uniqueCities = [...new Set(Cities)].sort();

  const Specialty = FilterItems.map((item) => item.specialty);
  const uniqueSpecialty = [...new Set(Specialty)].sort();

  const Experience_years = FilterItems.map((item) => item.experience_years);
  const uniqueExperience_years = [...new Set(Experience_years)].sort(
    (a, b) => a - b,
  );

  return {
    uniqueProvinces,
    uniqueCities,
    uniqueSpecialty,
    uniqueExperience_years,
  };
}
