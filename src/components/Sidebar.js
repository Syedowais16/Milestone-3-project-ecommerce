import { useRouter } from 'next/router';

export default function Sidebar({ cartItems, closeCart, removeFromCart }) {
  const router = useRouter();

  const handleCheckout = () => {
    // Save the cart data to localStorage before redirecting to checkout
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Navigate to the checkout page
    router.push('/checkout');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="w-80 bg-white p-6 absolute right-0 top-0 h-full shadow-xl overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <ul className="space-y-4">
          {cartItems.length === 0 ? (
            <li className="text-center text-gray-500">Your cart is empty.</li>
          ) : (
            cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 text-lg"
                >
                  &#10005;
                </button>
              </li>
            ))
          )}
        </ul>

        {cartItems.length > 0 && (
          <div className="mt-6">
            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white py-2 rounded-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        )}

        <button
          onClick={closeCart}
          className="absolute top-4 right-4 text-gray-700 text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
