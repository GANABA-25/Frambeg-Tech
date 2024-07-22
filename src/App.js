import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/page/homePage/Home";
import AllProducts from "./pages/page/AllProducts";
import HomeAppliances from "./pages/page/HomeAppliances";
import AudioAndVideo from "./pages/page/AudioAndVideo";
import Refrigerator from "./pages/page/Refrigerator";
import NewArrival from "./pages/page/newArrival/NewArrival";
import TodaysDeals from "./pages/page/todaysDeals/TodaysDeals";
import CartPage from "./pages/page/CartPage";
import ProductDetails from "./pages/page/ProductDetails";
import Login from "./pages/page/authentication/Login";
import Signup from "./pages/page/authentication/Signup";
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
      { path: "/CartPage", element: <CartPage /> },
      { path: "/ProductDetails", element: <ProductDetails /> },
      { path: "/Login", element: <Login /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/ResetPassword", element: <ResetPassword /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
