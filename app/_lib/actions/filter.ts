import { supabase } from "@/app/_lib/supabase";

export async function getFilterItems() {
  const { data: FilterItems, error } = await supabase
    .from("Doctors")
    .select("province, city, specialty, experience");

  if (error) throw new Error("Filter items could be loaded");

  const Provinces = FilterItems.map((item) => item.province);
  const uniqueProvinces = [...new Set(Provinces)].sort();

  const Cities = FilterItems.map((item) => item.city);
  const uniqueCities = [...new Set(Cities)].sort();

  const Specialty = FilterItems.map((item) => item.specialty);
  const uniqueSpecialty = [...new Set(Specialty)].sort();

  const Experience = FilterItems.map((item) => item.experience);
  const uniqueExperience = [...new Set(Experience)].sort(
    (a, b) => a - b,
  );

  return {
    uniqueProvinces,
    uniqueCities,
    uniqueSpecialty,
    uniqueExperience,
  };
}
