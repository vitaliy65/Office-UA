import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут буде логіка обробки замовлення
    console.log('Форма відправлена', formData);
    console.log('Товари в кошику', cart);
    setIsSubmitted(true);
    // Очистити форму після відправки
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: ''
    });
    clearCart();
  };

  const totalPrice = cart.productsInCart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8 text-left">
      <h1 className="text-3xl font-bold mb-8 text-center">Оформлення замовлення</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-center">Ваше замовлення</h2>
          {cart.productsInCart.map((product) => (
            <div key={product.id} className="flex items-center justify-between border-b py-2">
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">Кількість: {product.quantity}</p>
              </div>
              <p className="font-semibold">${(product.price * product.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="mt-4 text-xl font-bold text-right">
            Загальна сума: ${totalPrice.toFixed(2)}
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-center">Ваші дані</h2>
          {isSubmitted ? (
            <div className="flex flex-col">
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                Ваше замовлення успішно відправлено!
              </div>
              <div className="flex-grow" style={{ minHeight: '365px' }}></div>
              <Link
                to="/products"
                className="block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-center"
              >
                До товарів
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block mb-1">Ім'я</label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1">Прізвище</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-1">Адреса</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Оформити замовлення
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
