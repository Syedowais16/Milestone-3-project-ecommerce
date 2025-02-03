
javascript
Copy
Edit
export default function CartItem({ item, removeFromCart }) {
  return (
    <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      {/* Left section: Product details */}
      <div className="flex items-center space-x-4">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-16 h-16 object-cover rounded-lg shadow-md"
        />
        <div>
          <h3 className="font-semibold text-xl text-gray-800">{item.title}</h3>
          <p className="text-gray-500 text-sm">${item.price}</p>
        </div>
      </div>
      
      {/* Right section: Remove button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-600 hover:text-red-800 transition-all duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}