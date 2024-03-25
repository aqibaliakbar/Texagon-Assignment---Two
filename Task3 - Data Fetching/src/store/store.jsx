import { configureStore } from "@reduxjs/toolkit";
import productReducer, { fetchProducts } from "./productSlice.jsx";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

store.dispatch(fetchProducts());

export default store;
