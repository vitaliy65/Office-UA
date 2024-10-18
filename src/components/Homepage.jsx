import React from 'react'
import { Link } from 'react-router-dom'
import computers from '../images/computers.png'
import laptops from '../images/laptops.png'
import printing from '../images/printing.png'
import officeEquipment from '../images/orgtech.webp'
import furniture from '../images/furniture.webp'
import stationery from '../images/stationery.webp'
import networking from '../images/networking.png'
import accessories from '../images/accessories.png' 


export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner with site description */}
      <section className="bg-blue-600 text-white rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Office UA</h1>
        <p className="text-xl">
          Your one-stop shop for all office supplies and equipment. 
          We offer a wide range of high-quality products to meet all your office needs.
        </p>
      </section>

      {/* Product promotion banners */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Promotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-yellow-100 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Summer Sale!</h3>
            <p className="mb-4">Get up to 30% off on all stationery items.</p>
            <Link to="/sale" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
              Shop Now
            </Link>
          </div>
          <div className="bg-green-100 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">New Arrivals</h3>
            <p className="mb-4">Check out our latest ergonomic office chairs.</p>
            <Link to="/new-arrivals" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Product categories section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Product Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/products?category=${category.id}`}
              className="bg-white border rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
            >
              <img src={category.image} alt={category.name} className="w-48 h-48 mx-auto mb-2" />
              <h3 className="font-medium">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

const categories = [
  { id: 'computers', name: 'Комп\'ютери', image: computers },
  { id: 'laptops', name: 'Ноутбуки', image: laptops },
  { id: 'printing', name: 'Друкарська техніка', image: printing },
  { id: 'office-equipment', name: 'Оргтехніка', image: officeEquipment },
  { id: 'furniture', name: 'Меблі для офісу', image: furniture },
  { id: 'stationery', name: 'Канцелярія', image: stationery },
  { id: 'networking', name: 'Мережеве та серверне обладнання', image: networking },
  { id: 'accessories', name: 'Аксесуари та комплектуючі', image: accessories },
];
