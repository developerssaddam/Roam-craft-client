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
import UpdatePage from "../pages/UpdatePage/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://roamcraft-server.vercel.app/touristspot/create"),
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
        loader: () => fetch("https://roamcraft-server.vercel.app/touristspot/create"),
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
        loader: () => fetch("https://roamcraft-server.vercel.app/touristspot/create"),
      },
      {
        path: "/touristspot/details/:id",
        element: (
          <ProtectedRoute>
            <TouristSpotDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://roamcraft-server.vercel.app/touristspot/create/${params.id}`),
      },

      {
        path: "/touristspot/update/:id",
        element: (
          <ProtectedRoute>
            <UpdatePage />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://roamcraft-server.vercel.app/touristspot/create/${params.id}`),
      },
    ],
  },
]);

export default router;
