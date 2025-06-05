import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../features/api/user";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setPassword, setUserName } from "../../features/store/slice";

interface IFormRegister {
  username: string;
  email: string;
  password: string;
}

export const Registration = () => {
  const { register, handleSubmit, formState } = useForm<IFormRegister>({
    mode: "onChange",
  });

  const [registerUser, { isLoading, isSuccess, isError }] = useRegisterUserMutation();

  const emailError = formState.errors.email?.message;
  const usernameError = formState.errors.username?.message;
  const passwordError = formState.errors.password?.message;
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormRegister> = async (dataNewUser) => {
    try {
      await registerUser(dataNewUser).unwrap();
      dispatch(setUserName(dataNewUser.username));
      dispatch(setPassword(dataNewUser.password));
    } catch (error: any) {
      console.error("Неудалось зарегистрировать пользователя: ", error.message);
    }
  };

  useEffect(() => {
    if (isSuccess) navigation("/authorization");
  }, [isSuccess]);

  const handleClickClose = () => {
    navigation("/");
  };

  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center backdrop-blur-xs">
      <div className="relative rounded-xl border-2 p-4 shadow-xl">
        <h2 className="mb-4 text-center text-3xl">Регистрация</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="text-ms flex w-70 flex-col gap-4 sm:text-xl"
        >
          <input
            type="username"
            placeholder="Имя пользователя"
            className="rounded-xl border-2 p-3 focus:text-orange-400 dark:focus:text-[#1DB954]"
            {...register("username", {
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
            type="email"
            placeholder="email"
            className="rounded-xl border-2 p-3 focus:text-orange-400 dark:focus:text-[#1DB954]"
            {...register("email", {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Введите корректный email",
              },
            })}
          />
          {emailError && <p className="text-sm text-red-500">{emailError}</p>}
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
          {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
          {isLoading ? (
            <div className="flex items-center justify-center">
              <p className="animate-spin rounded-full border-3 border-orange-400 border-t-white p-5 dark:border-[#1DB954] dark:border-t-[#2a2a2a]"></p>
            </div>
          ) : (
            <button
              disabled={isLoading}
              type="submit"
              className="mx-auto block cursor-pointer rounded-2xl bg-orange-400 px-8 py-3 transition duration-300 ease-in-out hover:opacity-80 dark:bg-[#1DB954]"
            >
              Зарегистрироваться
            </button>
          )}
        </form>
        {isError && <p>Неудалось зарегистрировать пользователя</p>}
        <button
          disabled={isLoading}
          onClick={handleClickClose}
          className="position: absolute top-2 right-2 cursor-pointer rounded-full bg-orange-400 p-5 transition duration-300 ease-in-out hover:opacity-80 dark:bg-[#1DB954]"
          type="button"
        >
          <span className="relative flex items-center justify-center before:absolute before:h-1 before:w-7 before:-rotate-45 before:rounded-3xl before:bg-white before:content-[''] after:absolute after:h-1 after:w-7 after:rotate-45 after:rounded-3xl after:bg-white after:content-['']"></span>
        </button>
      </div>
    </div>
  );
};
