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
import ProtectedRoute from "./ProtectedRoute";

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
        element: (
          <ProtectedRoute>
            <AddTourist />
          </ProtectedRoute>
        ),
      },
      {
        path: "/mylist",
        element: (
          <ProtectedRoute>
            <MyList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/touristspot/details/:id",
        element: (
          <ProtectedRoute>
            <TouristSpotDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
