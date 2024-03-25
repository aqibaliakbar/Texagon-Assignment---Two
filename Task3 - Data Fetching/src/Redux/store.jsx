import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Redux/productSlice.jsx";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
