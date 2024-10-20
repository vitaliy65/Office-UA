import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setIsSubmitted(true);
    };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Зв'яжіться з нами</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Наші контакти</h2>
          <p className="text-gray-700 mb-4 text-left">
            Ми тут, щоб допомогти! Якщо у вас є питання щодо наших продуктів, потрібна допомога з замовленням або ви хочете обговорити оптові закупівлі, наша команда готова вам допомогти.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-600" />
              <a href="mailto:info@officeequippro.com" className="text-blue-600 hover:underline">info@officeequippro.com</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-blue-600" />
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
            </li>
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 text-blue-600 mt-1" />
              <address className="not-italic text-left">
                Office UA<br />
                вул. Офісна, 123<br />
                Бізнес-місто, БМ 12345<br />
                Україна
              </address>
            </li>
            <li className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-600" />
              <span>Пн-Пт: 9:00-18:00, Сб: 10:00-16:00, Нд: Вихідний</span>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4 text-center">Надіслати повідомлення</h2>
          {isSubmitted ? (
            <p className="text-green-600 mb-4 text-center">Повідомлення успішно надіслано!</p>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ім'я</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Електронна пошта</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Тема</label>
              <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Повідомлення</label>
              <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200">
              Надіслати повідомлення
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Приєднуйтесь до нас</h2>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <Facebook className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors duration-200">
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors duration-200">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Відвідайте наш магазин</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98823492404069!3d40.74844097138819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1682805705378!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Розташування магазину Office UA"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
