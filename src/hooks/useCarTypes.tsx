import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/api";
import { CarType } from "../types/carType";

export function useCarTypes() {
  const { isPending, error, data } = useQuery<CarType[]>({
    queryKey: ["carTypes"],
    queryFn: () => fetch(`${BASE_URL}/types`).then((res) => res.json()),
  });

  return { isPending, error, data: data ?? [] };
}
