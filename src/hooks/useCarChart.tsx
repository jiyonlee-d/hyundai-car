import { skipToken, useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/api";
import { CarChart } from "../types/carChart";

export function useCarChart(id?: number) {
  const { isPending, error, data } = useQuery<CarChart>({
    queryKey: [`carChart${id}`],
    queryFn: id
      ? () => fetch(`${BASE_URL}/car-detail/${id}`).then((res) => res.json())
      : skipToken,
  });

  return { isPending, error, data };
}
