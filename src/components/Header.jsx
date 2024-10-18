import {React, useState} from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { SearchIcon, ShoppingCartIcon } from 'lucide-react'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    window.location.href = `/products?search=${searchQuery}`
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Office UA Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">Office UA</span>
        </Link>
        {/* Нові посилання навігації */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Головна</Link>
          <Link to="/products" className="text-gray-600 hover:text-gray-900">Товари</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">Про нас</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Контакти</Link>
        </nav>
        <div className="flex-1 max-w-md mx-4">
          <form className="relative" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Пошук товарів..."
              className="w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-2"
            >
              <SearchIcon className="h-5 w-5 text-gray-500" />
              <span className="sr-only">Пошук</span>
            </button>
          </form>
        </div>
        <Link to="/cart" className="flex items-center space-x-1 text-sm">
          <ShoppingCartIcon className="h-5 w-5" />
          <span>Кошик</span>
          <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs">0</span>
        </Link>
      </div>
    </header>
  )
}
