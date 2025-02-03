export default function handler(req, res) {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: 29.99,
      image: '/nextjs.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 49.99,
      image: '/nextjs.jpg',
    },
    // Add more products as needed
  ];

  res.status(200).json(products);
}
