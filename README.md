# 🛒 E-Commerce Product Listing App

A responsive product listing application built using **React,
TypeScript, Vite, React Router and React Query**.\
The application allows users to browse products, search for items,
filter results, view product details and navigate through paginated
product lists.

Live Demo:https://ecomerce-cart-9z6fefuzq-nhiugs-projects.vercel.app/products?page=1

------------------------------------------------------------------------

# 🚀 Setup Instructions

### 1. Clone the repository

``` bash
git clone https://github.com/nhiug/ecommerce-cart.git
cd ecommerce-cart
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Run the development server

``` bash
npm run dev
```

Application will run at:

    http://localhost:5173

------------------------------------------------------------------------

### 4. Build the project

``` bash
npm run build
```

------------------------------------------------------------------------

### 5. Preview production build locally

``` bash
npm run preview
```

------------------------------------------------------------------------

# 📦 Tech Stack

-   React
-   TypeScript
-   Vite
-   React Router
-   React Query
-   CSS (custom styling)
-   Vercel for deployment

------------------------------------------------------------------------

# 📋 Features

## Product Listing Page

Displays a list of products fetched from an API in a responsive grid
layout.

Each product card shows: - Product image - Product title - Price -
Rating

Clicking a product navigates to the **Product Detail Page**.

------------------------------------------------------------------------

## Product Detail Page

Displays detailed information about a selected product:

-   Product image
-   Title
-   Description
-   Price
-   Brand
-   Category
-   Rating
-   Back navigation button

The layout is responsive and adapts for mobile screens.

------------------------------------------------------------------------

## Server-Side Pagination

Pagination is implemented using API parameters:

    limit
    skip

Only a limited number of products are fetched per request, improving
performance and reducing unnecessary data loading.

------------------------------------------------------------------------

## Search Functionality

The navigation bar contains a search input that:

-   Searches products by **title** and **description**
-   Uses **debounced input** to avoid filtering on every keystroke
-   Updates the URL query parameters

Example:

    /products?search=phone

------------------------------------------------------------------------

## Product Filters

Users can filter products using the sidebar.

Available filters:

### Category Filter

Filter products by category.

### Brand Filter

Displays available brands from the fetched products.

### Price Filter

Users can define: - Minimum price - Maximum price

Filters dynamically update the displayed product list.

------------------------------------------------------------------------

## Responsive Design

### Desktop

-   Sidebar filters visible
-   Multi-column product grid

### Mobile

-   Filters appear as a **slide-out drawer**
-   Grid adjusts to fewer columns
-   Responsive navigation bar

------------------------------------------------------------------------

## Routing

Routing handled with **React Router**.

Routes implemented:

    /
    /products
    /product/:id

The homepage redirects to the product listing page.

------------------------------------------------------------------------

## API Data Management with React Query

React Query manages server data fetching and caching.

Benefits: - API caching - Loading states - Error handling - Cleaner data
fetching logic

------------------------------------------------------------------------

# 📊 Data Source

The application uses a product API with **approximately 200 products**.

Because the dataset is relatively small, filtering is handled
**client-side after paginated data is fetched**.

------------------------------------------------------------------------

# ⚙️ Assumptions Made

-   API supports pagination using `limit` and `skip`
-   Product object contains:

```{=html}
<!-- -->
```
    id
    title
    description
    price
    brand
    rating
    category
    thumbnail

-   The dataset (\~200 products) is small enough to support client-side
    filtering.
-   Images are already hosted and accessible via URL.

------------------------------------------------------------------------

# 🏗 Architectural Decisions

## Feature-Based Folder Structure

    src
     ├ features
     │   └ products
     │       ├ components
     │       ├ hooks
     │       ├ pages
     │       └ types
     ├ router
     ├ hooks
     └ components

This keeps domain logic grouped together and improves scalability.

------------------------------------------------------------------------

## Custom Hooks for Data Fetching

Custom hooks encapsulate API logic:

    useProducts
    useProduct
    useCategories

These hooks internally use React Query.

------------------------------------------------------------------------

## URL Query Parameters for State

Search queries and pagination are stored in the URL.

Example:

    /products?search=phone&page=2

Benefits: - Shareable URLs - Refresh persistence - Improved UX

------------------------------------------------------------------------

# 📈 Improvements If Given More Time

### Server-Side Filtering

Move filters to the backend for better scalability.

### Sorting Options

Add sorting features: - Price (low → high) - Price (high → low) - Rating

### Improved Search

-   Search suggestions
-   Highlighted search matches
-   Fuzzy search

### UI Improvements

-   Skeleton loaders
-   Improved animations
-   Enhanced mobile navigation

### Accessibility

-   Keyboard navigation
-   ARIA attributes
-   Improved focus states

------------------------------------------------------------------------

# 🌐 Deployment

The project is deployed using **Vercel**.

Deployment steps:

1.  Push code to GitHub
2.  Import repository in Vercel
3.  Configure SPA routing using `vercel.json`
4.  Deploy

------------------------------------------------------------------------

# 📄 License

This project is created for demonstration and learning purposes.
