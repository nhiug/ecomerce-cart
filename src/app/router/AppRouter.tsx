import { Routes, Route, Navigate } from "react-router-dom"
import ProductListPage from "../../features/products/pages/ProductListPage"
import ProductDetailPage from "../../features/products/pages/ProductDetailPage"

function AppRouter() {
  return (
    <Routes>

      {/* redirect root to products */}
      <Route path="/" element={<Navigate to="/products" replace />} />

      <Route path="/products" element={<ProductListPage />} />

      <Route path="/product/:id" element={<ProductDetailPage />} />

    </Routes>
  )
}

export default AppRouter