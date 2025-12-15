import { supabase } from "@/app/_lib/supabase";

export async function getFilterItems() {
  const { data: FilterItems, error } = await supabase
    .from("Doctors")
    .select("province, specialty, experience_years");

  if (error) throw new Error("Filter items could be loaded");

  const Provinces = FilterItems.map((item) => item.province);
  const uniqueProvinces = [...new Set(Provinces)].sort();

  const Specialty = FilterItems.map((item) => item.specialty);
  const uniqueSpecialty = [...new Set(Specialty)].sort();

  const Experience_years = FilterItems.map((item) => item.experience_years);
  const uniqueExperience_years = [...new Set(Experience_years)].sort(
    (a, b) => a - b,
  );

  return {
    uniqueProvinces,
    uniqueSpecialty,
    uniqueExperience_years,
  };
}

export async function getCitysByProvince(province: string) {
  const { data: CityItems, error } = await supabase
    .from("Doctors")
    .select("city")
    .eq("province", province)
    .order("city", { ascending: true });

  if (error) throw new Error("City items could be loaded");
  const Cities = CityItems.map((item) => item.city);
  const uniqueCities = [...new Set(Cities)].sort();
  return uniqueCities;
}
