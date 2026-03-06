interface PaginationProps {
  page: number
  total: number
  limit: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  page,
  total,
  limit,
  onPageChange
}: PaginationProps) {

  const totalPages = Math.ceil(total / limit)

  const pages = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <div
      style={{
        marginTop: "40px",
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        flexWrap: "wrap"
      }}
    >

      {/* PREV BUTTON */}

      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        style={{
          padding: "8px 14px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          background: page === 1 ? "#f5f5f5" : "#fff",
          cursor: page === 1 ? "not-allowed" : "pointer"
        }}
      >
        Prev
      </button>

      {/* PAGE NUMBERS */}

      {pages.map((p) => (

        <button
          key={p}
          onClick={() => onPageChange(p)}
          style={{
            padding: "8px 14px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: page === p ? "#111" : "#fff",
            color: page === p ? "#fff" : "#000",
            fontWeight: page === p ? "600" : "400",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
        >
          {p}
        </button>

      ))}

      {/* NEXT BUTTON */}

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        style={{
          padding: "8px 14px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          background: page === totalPages ? "#f5f5f5" : "#fff",
          cursor: page === totalPages ? "not-allowed" : "pointer"
        }}
      >
        Next
      </button>

    </div>
  )
}