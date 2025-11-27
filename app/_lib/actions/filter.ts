import { supabase } from "@/app/_lib/supabase";

export async function getProvinces() {
  const { data: Provinces, error } = await supabase
    .from("Doctors")
    .select("province");
  if (error) throw new Error("Provinces could be loaded");
  console.log(Provinces);
  const allProvinces = Provinces.map((item) => item.province);
  const uniqueProvinces = [...new Set(allProvinces)].sort();
  return uniqueProvinces;
}
