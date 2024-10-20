import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { X, Plus, Minus } from 'lucide-react';
import Checkout from './Checkout';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  // Обчислення загальної вартості кошика
  const totalPrice = cart.productsInCart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ваш Кошик</h1>

      {cart.productsInCart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Ваш кошик порожній.</p>
          <Link
            to="/products"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Перейти до товарів
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-col space-y-4">
            {cart.productsInCart.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-600">{product.category}</p>
                    <p className="text-gray-800 font-bold">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() =>
                        updateQuantity(
                          product.id,
                          product.quantity > 1
                            ? product.quantity - 1
                            : product.quantity
                        )
                      }
                      className={`px-2 py-1 ${
                        product.quantity === 1
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                      disabled={product.quantity === 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-1">{product.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(product.id, product.quantity + 1)
                      }
                      className="px-2 py-1 text-gray-700 hover:bg-gray-200"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Загальна сума та дії */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <button
                onClick={clearCart}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Очистити кошик
              </button>
            </div>
            <div className="text-2xl font-bold">
              Загальна сума: ${totalPrice.toFixed(2)}
            </div>
          </div>

          {/* Кнопка оформлення замовлення */}
          <div className="mt-8 text-center">
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg"
            >
              Оформити замовлення
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
