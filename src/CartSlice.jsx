import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // Each item stores its product details and the quantity currently in the cart.
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === id);
      if (!item) return;
      // Keep quantities at one or above; use removeItem for deletion.
      item.quantity = Math.max(1, Number(quantity) || 1);
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default cartSlice.reducer;
