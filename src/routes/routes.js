import { useRoutes } from "react-router";
import { authRoutes } from "./authRoutes";
import { mainRoutes } from "./mainRoutes";

const AppRoutes = () => {
  return useRoutes([
    authRoutes,
    mainRoutes
  ]);
};

export default AppRoutes;
