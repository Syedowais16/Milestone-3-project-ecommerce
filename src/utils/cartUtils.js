// Fetches cart items from localStorage
export const getCartItems = () => {
    const storedItems = localStorage.getItem('cart');
    return storedItems ? JSON.parse(storedItems) : [];
  };
  
  // Adds an item to the cart and updates localStorage
  export const addItemToCart = (item) => {
    const currentCart = getCartItems();
    const updatedCart = [...currentCart, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  };
  
  // Removes an item from the cart by its id and updates localStorage
  export const removeItemFromCart = (id) => {
    const currentCart = getCartItems();
    const updatedCart = currentCart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  };
  
  // Clears the cart from localStorage
  export const clearCart = () => {
    localStorage.removeItem('cart');
  };
  