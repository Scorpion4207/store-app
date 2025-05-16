import { useState } from "react";
import basket from "../../assets/image/basket-icon.svg";
import user from "../../assets/image/user-icon.svg";

export const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCheked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isCheked);
    document.documentElement.classList.toggle("dark");
  };

  const onClickToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <header className=" bg-orange-400 dark:bg-gray-800">
        <div className="flex justify-between items-center p-4 max-w-4xl mx-auto my-0">
          <a href="#" className="text-2xl text-white">
            STORE
          </a>
          <input
            onChange={onChange}
            type="checkbox"
            className={`[appearance:none] w-12 h-7 before:transition-all before:duration-300 before:ease-in-out bg-white rounded-4xl relative before:content-[''] before:absolute before:w-6.5 before:bg-contain before:bg-no-repeat before:h-6.5 before:top-1/2 before:-translate-y-1/2 ${isCheked ? `before:translate-x-0.8 before:bg-[url('../assets/image/moon-icon.svg')]` : "before:translate-x-5.5  before:bg-[url('../assets/image/sun-icon.svg')]"} before:rounded-full`}
          />
          <nav className="sx: hidden">
            <ul className="flex gap-4 ">
              <li className="flex">
                <a href="#" className="flex flex-col items-center">
                  <img width={35} src={basket} alt="Корзина" />
                  <span>корзина</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex flex-col items-center">
                  <img width={34} src={user} alt="Профиль" />
                  <span>профиль</span>
                </a>
              </li>
            </ul>
          </nav>
          <button onClick={onClickToggleModal} className="w-8 h-8 cursor-pointer ">
            <span
              className={`w-8 h-0.75 display: flex before:transition-transform before:ease-in-out before:duration-300 after:transition-transform after:ease-in-out after:duration-300 transition-color ease-in-out duration-300  position: relative before:content-[''] before:absolute before:w-full before:h-0.75 before:bg-white after:content-['']  after:absolute  after:w-full after:h-0.75 after:bg-white ${isOpenModal ? "after:rotate-45 before:-rotate-45 before:top-0 after:bottom-0 bg-transparent" : "after:rotate-0 before:rotate-0 before:top-2 after:bottom-2 bg-white"}`}
            ></span>
          </button>
        </div>
      </header>
    </>
  );
};
