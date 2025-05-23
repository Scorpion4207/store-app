import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../../features/api/api";
import { listenerMiddleware } from "./listener-middleware";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(apiSlice.middleware),
});
