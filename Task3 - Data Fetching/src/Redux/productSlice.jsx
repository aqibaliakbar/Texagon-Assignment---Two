import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch("https://kr4w9.wiremockapi.cloud/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    console.log(data);
    return data;
  }
);

export const resetProducts = createAsyncThunk(
  "product/resetProducts",
  async () => {
    const response = await fetch("https://kr4w9.wiremockapi.cloud/products", {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Failed to reset products");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId) => {
    const response = await fetch(
      `https://kr4w9.wiremockapi.cloud/products/${productId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete product");
    }
  }
);

const initialState = {
  products: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(resetProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetProducts.fulfilled, (state) => {
        state.status = "succeeded";
        state.products = [];
      })
      .addCase(resetProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
