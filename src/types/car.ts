export type Car = {
  id: number;
  type: "승용" | "SUV" | "MPV";
  name: string;
  fuelEfficiency: number;
  isNew: boolean;
  imageName: string;
  description?: string;
};
