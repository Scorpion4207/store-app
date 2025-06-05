import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../../features/api/api";
import { listenerMiddleware } from "./listener-middleware";
import storeReducer from "../../features/store/slice";

export const store = configureStore({
  reducer: {
    store: storeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
