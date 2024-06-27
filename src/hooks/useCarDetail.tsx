import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/api";

export function useCarDetail(id: number) {
  const { isPending, error, data } = useQuery({
    queryKey: ["carDetail"],
    queryFn: () =>
      fetch(`${BASE_URL}/car-detail/${id}`).then((res) => res.json()),
  });

  return { isPending, error, data };
}
