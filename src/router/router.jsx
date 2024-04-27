import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import AllTourist from "../pages/AllTourist/AllTourist";
import AddTourist from "../pages/AddTourist/AddTourist";
import MyList from "../pages/MyList/MyList";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TouristSpotDetails from "../components/TouristSpotDetails/TouristSpotDetails";

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
      {
        path: "/touristspot/details/:id",
        element: <TouristSpotDetails />,
      },
    ],
  },
]);

export default router;
