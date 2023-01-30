import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import ErrorHandling from "./components/ErrorHandling";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";

import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";

const Offerss = lazy(() => import("./Offer"));
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorHandling />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Aboutus />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarant/:uniqueid",
        element: <RestaurantDetails />,
      },
      {
        path: "/offer",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Offerss />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
