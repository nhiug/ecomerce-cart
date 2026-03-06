import { useParams, useNavigate } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"

export default function ProductDetailPage() {

  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, isError } = useProduct(Number(id))

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading product</p>
  if (!data) return <p>No product found</p>

  const product = data

  return (

    <div
      className="product-detail-container"
      style={{
        display: "flex",
        gap: "40px",
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px",
        alignItems: "flex-start",
        flexWrap: "wrap"
      }}
    >

      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #ddd",
          background: "white",
          cursor: "pointer"
        }}
      >
        ← Back
      </button>

      {/* IMAGE */}

      <div
        className="product-image"
        style={{
          flex: "1 1 400px"
        }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "100%",
            borderRadius: "10px",
            objectFit: "contain"
          }}
        />
      </div>

      {/* PRODUCT INFO */}

      <div
        className="product-info"
        style={{
          flex: "1 1 400px"
        }}
      >
        <h1>{product.title}</h1>

        <p style={{ color: "#666", marginTop: "10px" }}>
          {product.description}
        </p>

        <h2 style={{ marginTop: "20px" }}>
          ${product.price}
        </h2>

        <p>⭐ {product.rating}</p>

        <p style={{ marginTop: "10px" }}>
          Brand: {product.brand}
        </p>

        <p>
          Category: {product.category}
        </p>

      </div>

    </div>

  )
}