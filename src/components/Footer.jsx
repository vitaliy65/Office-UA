import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">About Office UA</h2>
            <p className="text-gray-300 mb-4">
              Office UA is your trusted partner for all office supplies and equipment. 
              We provide high-quality products to businesses across Ukraine.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-gray-300">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Customer Service</h2>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="hover:text-gray-300">Shipping Information</Link></li>
              <li><Link to="/returns" className="hover:text-gray-300">Returns & Exchanges</Link></li>
              <li><Link to="/terms" className="hover:text-gray-300">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a href="mailto:info@officeua.com" className="hover:text-gray-300">info@officeua.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <a href="tel:+380441234567" className="hover:text-gray-300">+38 (044) 123-4567</a>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>123 Office Street, Kyiv, Ukraine</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Office UA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}