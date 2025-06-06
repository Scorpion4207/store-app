import { Link } from "react-router-dom";
import { setBurgerMenu, useSelectHook } from "../../features/store/slice";
import { useAppDispatch } from "../../app/hooks";

export const BurgerMenu = () => {
  if (window.innerWidth > 640) return;
  const dispatch = useAppDispatch();
  const { selectToken, selectBurgerMenu } = useSelectHook();

  const onClickToggleModal = () => {
    dispatch(setBurgerMenu(!selectBurgerMenu));
  };

  return (
    <div
      className={`fixed ${selectBurgerMenu ? "top-0" : "-top-full"} right-0 left-0 z-50 flex h-50 items-center justify-center rounded-b-4xl border-2 border-black bg-white transition-[top] duration-300 ease-in-out sm:hidden dark:bg-gray-800`}
    >
      <div>
        <nav>
          <ul className="flex flex-col gap-4 text-2xl">
            {selectToken && (
              <li className="transition-opacity duration-300 ease-in-out hover:opacity-80">
                <Link onClick={onClickToggleModal} to="/cart" className="flex items-center gap-2">
                  <svg
                    className="h-[40px] w-[40px] text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      data-v-1090b266=""
                      d="M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H4.38197C5.04482 2.25 5.65078 2.6245 5.94721 3.21738L5.27639 3.55279L5.94721 3.21738L6.46353 4.25H20.1384C21.0982 4.25 21.6999 5.28685 21.2237 6.12017L17.9391 11.8682C17.6275 12.4135 17.0477 12.75 16.4197 12.75H8.91567L7.59225 14.8675C7.48818 15.034 7.60789 15.25 7.80425 15.25H19C19.4142 15.25 19.75 15.5858 19.75 16C19.75 16.4142 19.4142 16.75 19 16.75H7.80425C6.42974 16.75 5.59176 15.2381 6.32025 14.0725L7.67159 11.9103L5.30898 5.295L4.60557 3.8882C4.56322 3.8035 4.47666 3.75 4.38197 3.75H3C2.58579 3.75 2.25 3.41421 2.25 3ZM7.06427 5.75L9.02855 11.25H16.4197C16.5094 11.25 16.5922 11.2019 16.6368 11.124L19.7076 5.75H7.06427ZM10 19.5C10 20.3284 9.32843 21 8.5 21C7.67157 21 7 20.3284 7 19.5C7 18.6716 7.67157 18 8.5 18C9.32843 18 10 18.6716 10 19.5ZM17.5 21C18.3284 21 19 20.3284 19 19.5C19 18.6716 18.3284 18 17.5 18C16.6716 18 16 18.6716 16 19.5C16 20.3284 16.6716 21 17.5 21Z"
                    ></path>
                  </svg>
                  <span>корзина</span>
                </Link>
              </li>
            )}
            <li className="transition-opacity duration-300 ease-in-out hover:opacity-80">
              <Link
                onClick={onClickToggleModal}
                to="/authorization"
                className="flex items-center gap-2"
              >
                <svg
                  className="h-[40px] w-[40px] text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                  />
                </svg>
                <span>{selectToken ? selectToken : "Войти"}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
