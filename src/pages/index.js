import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { addItemToCart, removeItemFromCart } from '../utils/cartUtils';

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openCart = () => setIsSidebarOpen(true);
  const closeCart = () => setIsSidebarOpen(false);

  const handleAddToCart = (item) => {
    const updatedCart = addItemToCart(item);
    setCartItems(updatedCart);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = removeItemFromCart(id);
    setCartItems(updatedCart);
  };

  const products = [
    { id: 1, title: 'Product 1', price: 10, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaYHUqnYQvkUZyWzu-ov6L3wD1C6758B3z74qPjcBbrpAJJxk0PNFOaQ&s' },
    { id: 2, title: 'Product 2', price: 20, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaYHUqnYQvkUZyWzu-ov6L3wD1C6758B3z74qPjcBbrpAJJxk0PNFOaQ&s' },
    { id: 3, title: 'Product 3', price: 15, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaYHUqnYQvkUZyWzu-ov6L3wD1C6758B3z74qPjcBbrpAJJxk0PNFOaQ&s' },
    { id: 4, title: 'Product 4', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaYHUqnYQvkUZyWzu-ov6L3wD1C6758B3z74qPjcBbrpAJJxk0PNFOaQ&s' },
    { id: 5, title: 'Product 5', price: 30, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaYHUqnYQvkUZyWzu-ov6L3wD1C6758B3z74qPjcBbrpAJJxk0PNFOaQ&s' },
    { id: 6, title: 'Product 6', price: 35, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaYHUqnYQvkUZyWzu-ov6L3wD1C6758B3z74qPjcBbrpAJJxk0PNFOaQ&s' },
  ];

  return (
    <div className="bg-light-blue-50 min-h-screen">
      {/* Header */}
      <header className="bg-light-blue-100 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gold-500">Ecommerce Owais</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-6">
        <button
          onClick={openCart}
          className="bg-gold-500 text-white p-2 rounded-lg shadow-md hover:bg-gold-600 transition-all duration-300 mb-6"
        >
          Open Cart
        </button>

        <div className="products-container mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Displaying 6 products with images */}
          {products.map((product) => (
            <div key={product.id} className="bg-light-blue-200 text-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 bg-gold-500 text-white p-2 rounded-lg shadow-md hover:bg-gold-600 transition-all duration-300 w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Sidebar */}
      {isSidebarOpen && (
        <Sidebar
          cartItems={cartItems}
          closeCart={closeCart}
          removeFromCart={handleRemoveFromCart}
        />
      )}
    </div>
  );
}
