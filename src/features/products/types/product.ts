export interface Product{
    id: number,
    title: string,
    description: string,
    price: number,
    brand: string,
    rating: number,
    category:string,
    thumbnail:string
}
export interface ProductResponse{
    products: Product[],
    limit : number,
    skip: number,
    total : number
}