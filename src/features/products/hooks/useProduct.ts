import { useQuery } from "@tanstack/react-query"
import { getProductById } from "../api/productsApi"

export function useProduct(id: number) {

  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id)
  })

}