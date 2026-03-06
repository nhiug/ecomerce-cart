import { useState } from "react"
import useCategories from "../hooks/useCategories"

interface FiltersProps {
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
  brands: string[]
  selectedBrands: string[]
  onBrandChange: (brands: string[]) => void

  minPrice: number
  maxPrice: number
  onMinPriceChange: (value: number) => void
  onMaxPriceChange: (value: number) => void
}

export default function Filters({
  selectedCategory,
  onCategoryChange,
  brands,
  selectedBrands,
  onBrandChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange
}: FiltersProps) {

  interface Category {
    slug: string
    name: string
  }

  const { data, isLoading } = useCategories() as { data?: Category[]; isLoading: boolean }

  const [openSection, setOpenSection] = useState<string | null>("category")

  const toggleSection = (section: string) => {
    setOpenSection(prev => prev === section ? null : section)
  }

  if (isLoading) return <p>Loading filters...</p>

  return (
    <div
      style={{
        width: "260px",
        background: "#ffffff",
        borderRadius: "14px",
        padding: "18px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        border: "1px solid #eee",
        height: "fit-content"
      }}
    >

      <h2
        style={{
          marginBottom: "16px",
          fontSize: "18px",
          fontWeight: 600
        }}
      >
        Filters
      </h2>

      {/* CATEGORY */}

      <div style={{ marginBottom: "20px" }}>

        <h3
          style={{
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "8px"
          }}
          onClick={() => toggleSection("category")}
        >
          Category {openSection === "category" ? "▼" : "▶"}
        </h3>

        {openSection === "category" && (

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>

            <label style={{ cursor: "pointer" }}>
              <input
                type="radio"
                name="category"
                checked={selectedCategory === null}
                onChange={() => onCategoryChange(null)}
              />{" "}
              All
            </label>

            {data?.map(category => (

              <label key={category.slug} style={{ cursor: "pointer" }}>

                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category.slug}
                  onChange={() => onCategoryChange(category.slug)}
                />{" "}
                {category.name}

              </label>

            ))}

          </div>

        )}

      </div>


      {/* BRAND */}

      <div style={{ marginBottom: "20px" }}>

        <h3
          style={{
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "8px"
          }}
          onClick={() => toggleSection("brand")}
        >
          Brand {openSection === "brand" ? "▼" : "▶"}
        </h3>

        {openSection === "brand" && (

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>

            {brands.map(brand => (

              <label key={brand} style={{ cursor: "pointer" }}>

                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={(e) => {

                    if (e.target.checked) {
                      onBrandChange([...selectedBrands, brand])
                    } else {
                      onBrandChange(
                        selectedBrands.filter(b => b !== brand)
                      )
                    }

                  }}
                />{" "}
                {brand}

              </label>

            ))}

          </div>

        )}

      </div>


      {/* PRICE */}

      <div>

        <h3
          style={{
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "10px"
          }}
          onClick={() => toggleSection("price")}
        >
          Price {openSection === "price" ? "▼" : "▶"}
        </h3>

        {openSection === "price" && (

          <div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "10px"
              }}
            >

              <input
                type="number"
                value={minPrice}
                onChange={(e) => onMinPriceChange(Number(e.target.value))}
                placeholder="Min"
                style={{
                  width: "80px",
                  padding: "6px",
                  borderRadius: "6px",
                  border: "1px solid #ddd"
                }}
              />

              <input
                type="number"
                value={maxPrice}
                onChange={(e) => onMaxPriceChange(Number(e.target.value))}
                placeholder="Max"
                style={{
                  width: "80px",
                  padding: "6px",
                  borderRadius: "6px",
                  border: "1px solid #ddd"
                }}
              />

            </div>

            <input
              type="range"
              min="0"
              max="2000"
              value={maxPrice}
              onChange={(e) => onMaxPriceChange(Number(e.target.value))}
              style={{ width: "100%" }}
            />

            <p
              style={{
                fontSize: "13px",
                color: "#666",
                marginTop: "6px"
              }}
            >
              ${minPrice} — ${maxPrice}
            </p>

          </div>

        )}

      </div>

    </div>
  )
}