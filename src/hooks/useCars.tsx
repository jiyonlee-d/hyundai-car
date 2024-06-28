import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/api";
import { Car } from "../types/car";

export function useCars() {
  const { isPending, error, data } = useQuery<Car[]>({
    queryKey: ["cars"],
    queryFn: () => fetch(`${BASE_URL}/cars`).then((res) => res.json()),
  });

  return { isPending, error, data: data ?? [] };
}
