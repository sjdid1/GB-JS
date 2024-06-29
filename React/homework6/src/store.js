import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const { id, name, description, price, available } = action.payload;
      const productIndex = state.products.findIndex(product => product.id === id);
      if (productIndex !== -1) {
        state.products[productIndex] = { id, name, description, price, available };
      }
    },
    toggleAvailability: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(product => product.id === productId);
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct, toggleAvailability } = productsSlice.actions;

export default configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
