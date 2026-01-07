export type FilterType = {
  title: string;
  items: string[] | number[];
  storeKey: "province" | "city" | "specialty" | "experience";
};

export type FilterDataType = {
  uniqueProvinces: string[];
  uniqueCities: string[];
  uniqueSpecialty: string[];
  uniqueExperience: number[];
};

export type ResetFilterType = {
  title?: string;
  onPress?: () => void;
};
