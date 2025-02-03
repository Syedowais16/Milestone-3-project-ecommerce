export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-200">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded-md" />
      <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
