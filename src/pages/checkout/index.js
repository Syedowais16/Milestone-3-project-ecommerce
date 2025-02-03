import { useState, useEffect } from 'react';
import CheckoutForm from '../../components/CheckoutForm';
import { getCartItems } from '../../utils/cartUtils';

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when component mounts
  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Checkout</h2>

      {cartItems.length === 0 ? (
        <div style={styles.emptyCartMessage}>
          Your cart is empty. Please add some items to proceed.
        </div>
      ) : (
        <CheckoutForm cartItems={cartItems} />
      )}
    </div>
  );
}

// In-page CSS styling (Inline Styles)
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#2d3748', // Dark text color
  },
  emptyCartMessage: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#4a5568', // Lighter gray text
    marginTop: '2rem',
  },
  cartItemContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1rem',
    marginBottom: '2rem',
  },
  cartItem: {
    backgroundColor: '#ffffff',
    borderRadius: '0.375rem', // rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // subtle shadow
    padding: '1rem',
    transition: 'transform 0.3s ease',
  },
  cartItemHover: {
    transform: 'scale(1.05)',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '0.375rem',
  },
  productDetails: {
    marginTop: '1rem',
  },
  productTitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#2d3748',
  },
  productPrice: {
    marginTop: '0.5rem',
    fontSize: '1.25rem',
    color: '#ed8936', // Orange color for price
  },
  checkoutButton: {
    marginTop: '2rem',
    backgroundColor: '#fbbf24', // Golden button
    color: '#ffffff',
    padding: '1rem 2rem',
    borderRadius: '0.375rem',
    fontSize: '1.25rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  checkoutButtonHover: {
    backgroundColor: '#d69e2e', // Darker golden on hover
  },
};
