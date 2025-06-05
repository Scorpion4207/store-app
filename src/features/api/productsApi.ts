import { apiSlice } from "./api.ts";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
      providesTags: ["Product"],
    }),
    getProduct: builder.query<Product, string>({
      query: (id) => `products/${id}`,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
