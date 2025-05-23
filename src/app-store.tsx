import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

export const StoreApp = () => {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
