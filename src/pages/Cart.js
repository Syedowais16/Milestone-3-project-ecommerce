import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart.filter((item) => item.id !== productId)));
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-8">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600"
              >
                &#10005;
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        <button
          onClick={handleCheckout}
          className="bg-green-600 text-white py-2 px-6 rounded-lg"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
