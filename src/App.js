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
    ],
  },
]);

function App() {
  return (
    <div className="bg-blue-10002">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
