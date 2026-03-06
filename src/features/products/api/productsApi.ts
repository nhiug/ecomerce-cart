const BASE_URL = "https://dummyjson.com"
import type { Product, ProductResponse } from "../types/product";

export async function getProducts(limit : number , skip :  number): Promise<ProductResponse>{
    const res = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`)
    if(!res.ok){
        throw new Error("Failed to fetch");
    }
    const data = await res.json()
    return data
}
export async function getCategories(): Promise<string[]> {

  const res = await fetch(`${BASE_URL}/products/categories`)

  if (!res.ok) {
    throw new Error("Failed to fetch categories")
  }

  return res.json()
}
export async function getProductById(
  id: number
): Promise<Product> {

  const res = await fetch(`${BASE_URL}/products/${id}`)

  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }

  return res.json()
}
export async function getProductsByCategory(
  category: string,
  limit: number,
  skip: number
): Promise<ProductResponse> {

  const res = await fetch(
    `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch category products")
  }

  return res.json()
}