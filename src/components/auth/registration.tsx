import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/authorization");
  };

  const handleClickClose = () => {
    navigation("/");
  };

  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center backdrop-blur-xs">
      <div className="relative rounded-xl border-2 bg-white p-4 shadow-xl">
        <h2 className="mb-4 text-center text-3xl">Регистрация</h2>
        <form action="" className="flex w-77 flex-col gap-4 text-xl">
          <input
            type="email"
            placeholder="Логин"
            className="rounded-xl border-2 p-3 focus:text-orange-400"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="rounded-xl border-2 p-3 focus:text-orange-400"
          />
          <button
            onClick={handleClick}
            type="submit"
            className="mx-auto block cursor-pointer rounded-2xl bg-orange-400 px-8 py-3"
          >
            Зарегистрироваться
          </button>
        </form>
        <button
          onClick={handleClickClose}
          className="position: absolute top-2 right-2 cursor-pointer rounded-full bg-orange-400 p-5"
          type="button"
        >
          <span className="relative flex items-center justify-center before:absolute before:h-1 before:w-7 before:-rotate-45 before:rounded-3xl before:bg-white before:content-[''] after:absolute after:h-1 after:w-7 after:rotate-45 after:rounded-3xl after:bg-white after:content-['']"></span>
        </button>
      </div>
    </div>
  );
};
