import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails({ products }) {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return <div>Продукт не знайдено</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <div className="mb-4">
            <span className="text-yellow-500">★ {product.rating}</span>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Додати до кошика
          </button>
        </div>
      </div>
    </div>
  )
}