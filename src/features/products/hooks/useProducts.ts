import { useQuery } from "@tanstack/react-query"
import { getProducts, getProductsByCategory } from "../api/productsApi"

export function useProducts(limit: number, skip: number, category: string | null) {
  return useQuery({
    queryKey: ["products", limit, skip, category],
    queryFn: () =>
      category
        ? getProductsByCategory(category, limit, skip)
        : getProducts(limit, skip)
  })
}