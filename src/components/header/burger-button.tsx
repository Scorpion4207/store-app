import { useAppDispatch } from "../../app/hooks";
import { setBurgerMenu, useSelectHook } from "../../features/store/slice";

export const BurgerButton = () => {
  const { selectBurgerMenu } = useSelectHook();
  const dispatch = useAppDispatch();
  const onClickToggleModal = () => {
    dispatch(setBurgerMenu(!selectBurgerMenu));
  };

  return (
    <button
      onClick={onClickToggleModal}
      className="z-60 h-8 w-8 cursor-pointer transition duration-300 ease-in-out hover:opacity-80 sm:hidden"
    >
      <span
        className={`transition-color position: relative flex h-0.75 w-8 transition duration-300 ease-in-out before:absolute before:h-0.75 before:w-full before:transition-transform before:duration-300 before:ease-in-out before:content-[''] after:absolute after:h-0.75 after:w-full after:transition-transform after:duration-300 after:ease-in-out after:content-[''] ${selectBurgerMenu ? "bg-transparent before:top-0 before:-rotate-45 before:bg-black after:bottom-0 after:rotate-45 after:bg-black dark:before:bg-[#1DB954] dark:after:bg-[#1DB954]" : "bg-white before:top-2 before:rotate-0 before:bg-white after:bottom-2 after:rotate-0 after:bg-white"}`}
      ></span>
    </button>
  );
};
