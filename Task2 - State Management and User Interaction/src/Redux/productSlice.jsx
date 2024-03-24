import { createSlice } from "@reduxjs/toolkit";
import productsData from "../data/index.js";

const initialState = {
  products: productsData,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    resetProducts: (state) => {
      state.products = productsData;
    },
  },
});

export const { deleteProduct, resetProducts } = productSlice.actions;

export default productSlice.reducer;
