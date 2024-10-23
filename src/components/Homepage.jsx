import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1))
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1))
  }, [])

  useEffect(() => {
    const intervalId = setInterval(goToNext, 6000)
    return () => clearInterval(intervalId)
  }, [goToNext])

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

      {/* Слайдер */}
      <div className="relative w-full mx-auto h-[400px] overflow-hidden rounded-lg shadow-lg m-8 group">
        {/* Фото для слайдера */}
        <div
          className="w-full h-full flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliderImages.map((img, index) => (
            <img
              key={index}
              src={img.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              } transition-colors`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

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

const sliderImages = [
  {img: "/images/slider1.jpg", index: "0"},
  {img: "/images/slider2.jpg", index: "1"}
]

const categories = [
  { id: 'computers', name: 'Комп\'ютери', image: "/images/computers.png" },
  { id: 'laptops', name: 'Ноутбуки', image: "/images/laptops.png"  },
  { id: 'printing', name: 'Друкарська техніка', image: "/images/printing.png" },
  { id: 'office-equipment', name: 'Оргтехніка', image: "/images/orgtech.webp" },
  { id: 'furniture', name: 'Меблі для офісу', image: "/images/furniture.webp" },
  { id: 'stationery', name: 'Канцелярія', image: "/images/stationery.webp" },
  { id: 'networking', name: 'Мережеве та серверне обладнання', image: "/images/networking.png" },
  { id: 'accessories', name: 'Аксесуари та комплектуючі', image: "/images/accessories.png" },
];
