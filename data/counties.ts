export const COUNTIES = [
  "Nairobi",
  "Kiambu",
  "Machakos",
  "Kajiado",
  "Mombasa",
  "Nakuru",
  "Uasin Gishu",
  "Kisumu",
  "Kakamega",
  "Bungoma",
  "Nyeri",
  "Meru",
  "Embu",
  "Naivasha", // town/region label from your dataset
] as const;

export type CountyName = (typeof COUNTIES)[number];
