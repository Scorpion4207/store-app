import Cookies from "js-cookie";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initial-slice";
import { useAppSelector } from "../../app/hooks";
import type { Product } from "../api/productsApi";

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.darkMode = action.payload ? "dark" : "light";
      Cookies.set("darkMode", action.payload ? "dark" : "light", { expires: 30 });
    },
    setBurgerMenu(state, action: PayloadAction<boolean>) {
      state.burgerMenu = action.payload;
    },
    setCart(state, action: PayloadAction<Product>) {
      state.cart = [...state.cart, action.payload];
    },
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setRemoveCart(state, action: PayloadAction<number>) {
      const set = new Set();
      state.cart = state.cart.filter((product) => {
        if (product.id !== action.payload) {
          return product;
        } else {
          if (!set.has(action.payload)) {
            set.add(product.id);
            return false;
          } else {
            return product;
          }
        }
      });
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      Cookies.set("token", action.payload, { expires: 30 });
    },
  },
});

export const {
  setDarkMode,
  setBurgerMenu,
  setCart,
  setUserName,
  setPassword,
  setRemoveCart,
  setToken,
} = storeSlice.actions;

export const useSelectHook = () => {
  const selectBurgerMenu = useAppSelector((state) => state.store.burgerMenu);
  const selectDarkMode = useAppSelector((state) => state.store.darkMode);
  const selectCart = useAppSelector((state) => state.store.cart);
  const selectUserName = useAppSelector((state) => state.store.userName);
  const selectPassword = useAppSelector((state) => state.store.password);
  const selectToken = useAppSelector((state) => state.store.token);

  return {
    selectBurgerMenu,
    selectCart,
    selectDarkMode,
    selectUserName,
    selectPassword,
    selectToken,
  };
};

export default storeSlice.reducer;
