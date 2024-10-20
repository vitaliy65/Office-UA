import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Star, ShoppingCart, Check, X } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

export default function ProductDetails({ products = [] }) {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id, 10))
  const { addToCart } = useCart()
  const [buttonClicked, setButtonClicked] = useState(false)

  if (!product) {
    return <div className="container mx-auto px-4 py-8 text-center">Товар не знайдено</div>
  }

  const handleAddToCart = () => {
    addToCart(product)
    setButtonClicked(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-4">
            {product.category}
          </span>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.rating.toFixed(1)})</span>
          </div>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex items-center mb-6">
            <span className="mr-2 font-semibold">Availability:</span>
            {product.availability ? (
              <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                <Check className="w-4 h-4 mr-1" /> In Stock
              </span>
            ) : (
              <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                <X className="w-4 h-4 mr-1" /> Out of Stock
              </span>
            )}
          </div>
          <button 
            className={`w-full md:w-auto flex items-center justify-center px-4 py-2 rounded-md text-white font-medium ${
              product.availability && !buttonClicked
                ? 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' 
                : 'bg-gray-400 cursor-not-allowed'
            } transition-colors duration-200`}
            disabled={!product.availability || buttonClicked}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            {product.availability ? 'Додати в кошик' : 'Немає в наявності'}
          </button>
        </div>
      </div>
    </div>
  )
}
