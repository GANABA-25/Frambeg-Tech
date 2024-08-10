import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCartData } from "./store/cart-actions";

import Home from "./pages/page/homePage/Home";
import AllProducts from "./pages/page/AllProducts";
import HomeAppliances from "./pages/page/HomeAppliances";
import AudioAndVideo from "./pages/page/AudioAndVideo";
import Refrigerator from "./pages/page/Refrigerator";
import NewArrival from "./pages/page/newArrival/NewArrival";
import TodaysDeals from "./pages/page/todaysDeals/TodaysDeals";
import ProductDetails from "./pages/page/ProductDetails";
import SignIn from "./pages/page/authentication/SignIn";
import Signup from "./pages/page/authentication/Signup";
import ResetPasswordEmailVerification from "./pages/page/authentication/ResetPasswordEmailVerification";
import ResetPassword from "./pages/page/authentication/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/AllProducts", element: <AllProducts /> },
      { path: "/HomeAppliance", element: <HomeAppliances /> },
      { path: "/AudioAndVideo", element: <AudioAndVideo /> },
      { path: "/Refrigerators", element: <Refrigerator /> },
      { path: "/NewArrival", element: <NewArrival /> },
      { path: "/TodaysDeals", element: <TodaysDeals /> },
      { path: "/ProductDetails", element: <ProductDetails /> },
      { path: "/SignIn", element: <SignIn /> },
      { path: "/Signup", element: <Signup /> },
      {
        path: "/ResetPasswordEmailVerification",
        element: <ResetPasswordEmailVerification />,
      },
      { path: "/ResetPassword/:token", element: <ResetPassword /> },
    ],
  },
]);

function App() {
  const userId = sessionStorage.getItem("userId");
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(fetchCartData());
    }
  }, [userId, dispatch]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
