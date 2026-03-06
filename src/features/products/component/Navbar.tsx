import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import useDebounce from "../hooks/useDebounce"

export default function Navbar() {

  const [searchParams, setSearchParams] = useSearchParams()

  const [search, setSearch] = useState(searchParams.get("search") || "")

  const debouncedSearch = useDebounce(search, 400)

  useEffect(() => {

    const params = new URLSearchParams(searchParams)

    if (debouncedSearch.trim() === "") {
      params.delete("search")
    } else {
      params.set("search", debouncedSearch)
      params.set("page", "1")
    }

    setSearchParams(params)

  }, [debouncedSearch])

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: "64px",
        background: "#1f2937",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        gap: "20px",
        color: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
      }}
    >

     

      {/* LOGO */}

      <h2 style={{ margin: 0 }}>
        LeegalityUI
      </h2>

      {/* SEARCH */}

      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>

        <div style={{ position: "relative", width: "100%", maxWidth: "520px" }}>

          <span
            style={{
              position: "absolute",
              left: "12px",
              top: "9px"
            }}
          >
            🔍
          </span>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            style={{
              width: "100%",
              padding: "10px 14px 10px 34px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "14px"
            }}
          />

        </div>

      </div>

    </div>
  )
}