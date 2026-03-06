import { Route, Routes, Navigate } from "react-router-dom"
import ProductListPage from "../../features/products/pages/ProductListPage"
import ProductDetailPage from "../../features/products/pages/ProductDetailPage"

function AppRouter() {
  return (
    <Routes>

      {/* homepage */}
      <Route
        path="/"
        element={<ProductListPage />}
      />

      {/* products page */}
      <Route
        path="/products"
        element={<ProductListPage />}
      />

      {/* product detail */}
      <Route
        path="/product/:id"
        element={<ProductDetailPage />}
      />

      {/* fallback */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  )
}

export default AppRouter