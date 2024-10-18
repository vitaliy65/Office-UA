import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = ['computers', 'laptops', 'printing', 'office-equipment', 'furniture', 'stationery', 'networking', 'accessories']

export default function ProductListingPage({ products = [] }) {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
  const [sortOption, setSortOption] = useState('price-asc')

  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const category = params.get('category')
    if (category) {
      setSelectedCategory(category)
    }
  }, [location])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const name = params.get('search')
    if (name) {
      setSearchTerm(name)
    }
  }, [location])

  useEffect(() => {
    if (!products) return;

    let result = [...products]

    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory)
    }

    // Apply price range filter
    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    )

    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    setFilteredProducts(result)
  }, [searchTerm, selectedCategory, priceRange, sortOption, products])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      {/* Search and Filters */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>

        <select
          className="w-full py-2 px-4 border rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>

        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min Price"
            className="w-full py-2 px-4 border rounded-md"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="w-full py-2 px-4 border rounded-md"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
          />
        </div>

        <select
          className="w-full py-2 px-4 border rounded-md"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Best Rating</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts && filteredProducts.map(product => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">${product.price.toFixed(2)}</span>
                  <span className="text-yellow-500">★ {product.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts && filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No products found matching your criteria.</p>
      )}
    </div>
  )
}
