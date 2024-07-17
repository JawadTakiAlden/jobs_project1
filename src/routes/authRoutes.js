import MinimalLayout from "../Layouts/MinimalLayout";
import Register from "../views/auth/Register";
import LoginPage from "../views/auth/Login";
import InformationPage from "../views/information";

export const authRoutes = {
  path: "",
  element: <MinimalLayout />,
  children: [
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "fillInformation",
      element: <InformationPage />,
    },
  ],
};
