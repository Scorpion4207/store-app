import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useSelectHook, setDarkMode } from "../../features/store/slice";

export const ThemeSwitcher = () => {
  const { selectDarkMode } = useSelectHook();
  const [isChecked, setIsChecked] = useState(selectDarkMode === "dark");

  const dispatch = useAppDispatch();

  const onChange = () => {
    setIsChecked(!isChecked);
    dispatch(setDarkMode(!isChecked));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <input
      onChange={onChange}
      type="checkbox"
      className={`relative h-7 w-12 cursor-pointer [appearance:none] rounded-4xl bg-gray-800 before:absolute before:top-1/2 before:h-6.5 before:w-6.5 before:-translate-y-1/2 before:bg-contain before:bg-no-repeat before:transition-all before:duration-300 before:ease-in-out before:content-[''] dark:bg-white ${isChecked ? `before:translate-x-0.8 before:bg-[url('../assets/image/moon-icon.svg')]` : "before:translate-x-5.5 before:bg-[url('../assets/image/sun-icon.svg')]"} before:rounded-full`}
    />
  );
};
