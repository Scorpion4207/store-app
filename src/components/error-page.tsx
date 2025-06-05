import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center text-xl"
      id="error-page"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
