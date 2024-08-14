import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { login } from "./store/authentication-slice";
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
import CheckOut from "./pages/page/CheckOut";

import InternetStatusMonitor from "./pages/components/InternetStatusMonitor";
import InternetStatusAnimation from "./pages/components/InternetStatusAnimation";

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
      { path: "/CheckOut", element: <CheckOut /> },
    ],
  },
]);

function App() {
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedAuthData = sessionStorage.getItem("user");
    if (storedAuthData) {
      dispatch(login(JSON.parse(storedAuthData)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCartData(userId, token));
    }
  }, [userId, token, dispatch]);

  return (
    <Fragment>
      <InternetStatusMonitor setIsOnline={setIsOnline} />

      {isOnline ? (
        <div>
          <RouterProvider router={router} />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <InternetStatusAnimation />
        </div>
      )}
    </Fragment>
  );
}

export default App;
