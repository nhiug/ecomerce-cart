import type { Product } from "../types/product"
import { useNavigate } from "react-router-dom"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      style={{
        border: "1px solid #eee",
        borderRadius: "12px",
        padding: "14px",
        cursor: "pointer",
        background: "#fff",
        transition: "all 0.25s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)"
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >

      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "100%",
          height: "170px",
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />

      <h3 style={{ fontSize: "15px", marginTop: "10px" }}>
        {product.title}
      </h3>

      <p style={{ fontWeight: 600 }}>
        ${product.price}
      </p>

      <p style={{ color: "#777", fontSize: "14px" }}>
        ⭐ {product.rating}
      </p>

    </div>
  )
}