import { useSelectHook } from "../../features/store/slice";
import { CardsList } from "./cards-list";

export const Home = () => {
  const { selectToken } = useSelectHook();

  if (!selectToken) {
    return (
      <div className="mx-auto my-0 mt-10 max-w-5xl text-center text-2xl">
        <div>Пожалуйста авторизуйтесь для просмотра товаров</div>
      </div>
    );
  }

  return (
    <section className="mx-auto my-0 mt-10 max-w-5xl">
      <CardsList />
    </section>
  );
};
