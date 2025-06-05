import { useNavigate } from "react-router-dom";
import { setToken, useSelectHook } from "../../features/store/slice";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";

interface IFormLogin {
  userName: string;
  password: string;
}

export const Authorization = () => {
  const navigation = useNavigate();
  const { register, handleSubmit, formState } = useForm<IFormLogin>();
  const { selectUserName, selectPassword } = useSelectHook();
  const [messageError, setMessageError] = useState<string>();
  const dispatch = useAppDispatch();

  const usernameError = formState.errors.userName?.message;
  const passwordError = formState.errors.password?.message;

  const handleClickRegistration = () => {
    navigation("/registration");
  };

  const onSubmit: SubmitHandler<IFormLogin> = (dataLogin) => {
    setMessageError("");
    if (dataLogin.userName === selectUserName && dataLogin.password === selectPassword) {
      dispatch(setToken(dataLogin.userName));
      navigation("/");
    } else {
      setMessageError("Неправильный логин или пароль!");
    }
  };

  const handleClickClose = () => {
    navigation("/");
  };

  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center backdrop-blur-xs">
      <div className="relative rounded-xl border-2 p-4 shadow-xl">
        <h2 className="mb-4 text-center text-2xl">Авторизация</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="text-ms flex w-[100%] flex-col gap-4 sm:text-xl"
        >
          <input
            type="userName"
            placeholder="Логин"
            className="rounded-xl border-2 p-3 focus:text-orange-400 dark:focus:text-[#1DB954]"
            {...register("userName", {
              required: true,
              minLength: {
                value: 3,
                message: "Минимум 3 символа",
              },
              maxLength: {
                value: 20,
                message: "Максимум 20 символов",
              },
            })}
          />
          {usernameError && <p className="text-red-500">{usernameError}</p>}
          <input
            type="password"
            placeholder="Пароль"
            className="rounded-xl border-2 p-3 focus:text-orange-400 dark:focus:text-[#1DB954]"
            {...register("password", {
              required: true,
              minLength: {
                value: 3,
                message: "Минимум 3 символа",
              },
              maxLength: {
                value: 20,
                message: "Максимум 20 символов",
              },
            })}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          <div className="flex gap-4">
            <button
              type="submit"
              className="mx-auto block cursor-pointer rounded-2xl bg-orange-400 px-8 py-3 transition duration-300 ease-in-out hover:opacity-80 dark:bg-[#1DB954]"
            >
              Войти
            </button>
            <button
              onClick={handleClickRegistration}
              type="button"
              className="mx-auto block cursor-pointer rounded-2xl bg-orange-400 px-8 py-3 transition duration-300 ease-in-out hover:opacity-80 dark:bg-[#1DB954]"
            >
              Регистрация
            </button>
          </div>
        </form>

        <button
          onClick={handleClickClose}
          className="position: absolute top-2 right-2 cursor-pointer rounded-full bg-orange-400 p-5 transition duration-300 ease-in-out hover:opacity-80 dark:bg-[#1DB954]"
          type="button"
        >
          <span className="relative flex items-center justify-center before:absolute before:h-1 before:w-7 before:-rotate-45 before:rounded-3xl before:bg-white before:content-[''] after:absolute after:h-1 after:w-7 after:rotate-45 after:rounded-3xl after:bg-white after:content-['']"></span>
        </button>
        {messageError && <p className="text-red-500">{messageError}</p>}
      </div>
    </div>
  );
};
