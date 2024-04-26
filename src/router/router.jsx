import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllTourist from "../components/AllTourist/AllTourist";
import AddTourist from "../components/AddTourist/AddTourist";
import MyList from "../components/MyList/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/alltourist",
        element: <AllTourist />,
      },
      {
        path: "/addtourist",
        element: <AddTourist />,
      },
      {
        path: "/mylist",
        element: <MyList />,
      },

    ],
  },
]);

export default router;
