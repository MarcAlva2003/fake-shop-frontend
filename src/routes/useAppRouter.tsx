import { HomePage, NotFoundPage } from "../pages";
import { RouteObject, useRoutes } from "react-router-dom";

export interface IPublicRoutes {
  HOME: string;
  NOT_FOUND: string;
}

export const useAppRouter = () => {
  const publicRoutes: IPublicRoutes = {
    HOME: "/",
    NOT_FOUND: "*",
  };
  const publicRouter: RouteObject[] = [
    {
      path: publicRoutes.HOME,
      element: <HomePage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: publicRoutes.NOT_FOUND,
      element: <NotFoundPage />,
    },
  ];
  return {
    publicRoutes,
    publicRouter: useRoutes(publicRouter),
  };
};
