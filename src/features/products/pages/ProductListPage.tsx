import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useProducts } from "../hooks/useProducts"
import ProductCard from "../component/ProductCard"
import Filters from "../component/Filters"
import Pagination from "../component/Pagination"

export default function ProductListPage() {

  const LIMIT = 20

  const [searchParams, setSearchParams] = useSearchParams()

  const category = searchParams.get("category")
  const page = Number(searchParams.get("page") || 1)
  const search = searchParams.get("search")?.toLowerCase() || ""

  const skip = (page - 1) * LIMIT

  const { data, isLoading, isError } = useProducts(LIMIT, skip, category)

  const products = data?.products ?? []
  const total = data?.total ?? 0

  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(2000)

  const [showFilters, setShowFilters] = useState(false)

  const brands = Array.from(new Set(products.map(p => p.brand)))

  const filteredProducts = products.filter(product => {

    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand)

    const priceMatch =
      product.price >= minPrice &&
      product.price <= maxPrice

    const searchWords = search.split(" ")

    const searchMatch = searchWords.every(word =>
      product.title.toLowerCase().includes(word) ||
      product.description.toLowerCase().includes(word)
    )

    return brandMatch && priceMatch && searchMatch

  })

  const handleCategoryChange = (value: string | null) => {

    setSelectedBrands([])

    const params: any = { page: "1" }

    if (value) params.category = value

    setSearchParams(params)
  }

  const handlePageChange = (newPage: number) => {

    const params: any = { page: String(newPage) }

    if (category) params.category = category

    setSearchParams(params)
  }

  if (isLoading) return <p style={{ padding: "30px" }}>Loading products...</p>
  if (isError) return <p style={{ padding: "30px" }}>Failed to fetch products</p>

  return (

    <div
      className="layout"
      style={{
        display: "flex",
        gap: "40px",
        padding: "30px",
       // maxWidth: "1200px",
        margin: "0 auto",
        alignItems: "flex-start"
      }}
    >

      {/* MOBILE FILTER BUTTON */}

      <button
        className="mobile-filter-btn"
        onClick={() => setShowFilters(true)}
      >
        Filters
      </button>

      {/* SIDEBAR */}

      <div
        className={`sidebar ${showFilters ? "open" : ""}`}
      >

        <Filters
          selectedCategory={category}
          onCategoryChange={handleCategoryChange}
          brands={brands}
          selectedBrands={selectedBrands}
          onBrandChange={setSelectedBrands}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
        />

        <button
          className="close-filters"
          onClick={() => setShowFilters(false)}
        >
          Close
        </button>

      </div>

      {/* PRODUCTS */}

      <div style={{ flex: 1 }}>

        <h1 style={{ marginBottom: "10px" }}>
          Products
        </h1>

        <p style={{ marginBottom: "20px", color: "#555" }}>
          {filteredProducts.length} results found
        </p>

        <div
          className="product-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
            gap: "20px"
          }}
        >

          {filteredProducts.map(product => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

        <Pagination
          page={page}
          total={total}
          limit={LIMIT}
          onPageChange={handlePageChange}
        />

      </div>

    </div>
  )
}