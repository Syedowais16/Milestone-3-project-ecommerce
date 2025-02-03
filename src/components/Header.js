import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Header({ toggleCart, cartCount }) {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link href="/">E-Commerce</Link>
        </h1>
        <div className="flex items-center space-x-4">
          <button onClick={toggleCart} className="relative">
            <AiOutlineShoppingCart size={24} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
