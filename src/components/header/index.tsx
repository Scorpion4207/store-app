import { Link } from "react-router-dom";
import { BurgerMenu } from "../burger-menu/burger-menu";
import { BurgerButton } from "./burger-button";
import { Navigation } from "./navigation";
import { ThemeSwitcher } from "./theme-switcher";
export const Header = () => (
  <header className="transition-bg sticky top-0 z-50 bg-orange-400 text-black duration-300 ease-in-out dark:bg-gray-800 dark:text-white">
    <div className="mx-auto my-0 flex max-w-[1230px] items-center justify-between p-4 px-[10px]">
      <Link to="/" className="text-2xl">
        STORE
      </Link>
      <Navigation />
      <ThemeSwitcher />
      <BurgerButton />
    </div>
    <BurgerMenu />
  </header>
);
