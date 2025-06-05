import Cookies from "js-cookie";
import type { Product } from "../api/productsApi";
export interface StoreState {
  darkMode: string | undefined;
  burgerMenu: boolean;
  cart: Product[];
  userName: string;
  password: string;
  token: string;
}

export const initialState: StoreState = {
  darkMode: Cookies.get("darkMode"),
  burgerMenu: false,
  cart: [],
  userName: "",
  password: "",
  token: Cookies.get("token") || "",
};
