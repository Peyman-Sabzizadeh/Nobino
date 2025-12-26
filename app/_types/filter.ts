export type FilterType = {
  title: string;
  items: string[] | number[];
  storeKey: "province" | "city" | "specialty" | "experience";
  hasProvince?: boolean;
};

export type FilterDataType = {
  uniqueProvinces: string[];
  uniqueCities?: string[];
  uniqueSpecialty: string[];
  uniqueExperience_years: number[];
};

export type ResetFilterType = {
  title?: string;
  onPress?: () => void;
};

export type searchParamsType = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
