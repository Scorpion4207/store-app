import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import { useEffect } from "react";
import { useSelectHook } from "./features/store/slice";

export const StoreApp = () => {
  const { selectDarkMode } = useSelectHook();
  useEffect(() => {
    if (selectDarkMode === "dark") document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
