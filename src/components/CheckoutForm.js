import { useState, useEffect } from 'react';

export default function CheckoutForm() {
  const [formData, setFormData] = useState({ name: '', address: '', payment: '' });
  const [cartItems, setCartItems] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  // Load cart items from localStorage when component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate order success (you can integrate an actual payment gateway here)
    setIsSuccess(true);

    // Optionally clear cart after purchase
    localStorage.removeItem('cart');

    // Simulate redirect to a success page or message
    setTimeout(() => {
      setIsSuccess(false);
      window.location.href = '/';  // Redirect to homepage after success
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Checkout</h2>

      {isSuccess ? (
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center mb-8">
          <p className="text-xl font-semibold">Order Successful!</p>
          <p className="mt-2">Thank you for your purchase. You will be redirected shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-lg font-semibold text-gray-700">Shipping Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your shipping address"
              required
            />
          </div>

          <div>
            <label htmlFor="payment" className="block text-lg font-semibold text-gray-700">Payment Method</label>
            <select
              id="payment"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Cart</h3>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex justify-end">
            <button type="submit" className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
              Complete Purchase
            </button>
          </div>
        </form>
      )}
    </div>
  );
}