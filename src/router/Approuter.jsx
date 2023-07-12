import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { Detail } from "../heroes/pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="marvel" />,
  },
  {
    path: "marvel",
    element: <MarvelPage />,
  },
  {
    path: "dc",
    element: <DcPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "personaje/:id",
    element: <Detail />,
  },
]);

export const Approuter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
