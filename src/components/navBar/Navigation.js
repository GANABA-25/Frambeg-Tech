import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate, Link } from "react-router-dom";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import { logout } from "../../store/authentication-slice";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaCartFlatbed } from "react-icons/fa6";

import CartFile from "../cart/CartFile";
import SearchInput from "./SearchInput";
import CartItem from "../cart/CartItems";
import ScrollToTop from "../../pages/components/ScrollToTop";

import "../offcanvas/Offcanvas.css";
import "../offcanvas/Offcanvas2.css";
import axios from "axios";

const NavigationBar = () => {
  const [HomePageColor, setHomePageColor] = useState("text-white");
  const [AllProductsPageColor, setAllProductsPageColor] =
    useState("text-white");
  const [HomeApplianceColor, setHomeApplianceColor] = useState("text-white");
  const [AudioAndVideoColor, setAudioAndVideoColor] = useState("text-white");
  const [RefrigeratorsPageColor, setRefrigeratorsPageColor] =
    useState("text-white");
  const [NewArrivalPageColor, setNewArrivalPageColor] = useState("text-white");
  const [TodaysDealsPageColor, setTodaysDealsPageColor] =
    useState("text-white");
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);
  const subtotal = useSelector((state) => state.cart.subtotal);

  const cartItems = useSelector((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    location.pathname === "/"
      ? setHomePageColor("underline underline-offset-4")
      : setHomePageColor("");

    location.pathname === "/AllProducts"
      ? setAllProductsPageColor("underline underline-offset-4")
      : setAllProductsPageColor("");

    location.pathname === "/HomeAppliance"
      ? setHomeApplianceColor("underline underline-offset-4")
      : setHomeApplianceColor("");

    location.pathname === "/AudioAndVideo"
      ? setAudioAndVideoColor("underline underline-offset-4")
      : setAudioAndVideoColor("");

    location.pathname === "/Refrigerators"
      ? setRefrigeratorsPageColor("underline underline-offset-4")
      : setRefrigeratorsPageColor("");

    location.pathname === "/NewArrival"
      ? setNewArrivalPageColor("underline underline-offset-4")
      : setNewArrivalPageColor("");

    location.pathname === "/TodaysDeals"
      ? setTodaysDealsPageColor("underline underline-offset-4")
      : setTodaysDealsPageColor("");
  }, [location.pathname]);

  const toggleOffcanvas2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  const checkOutHandler = async () => {
    if (!isLoggedIn) {
      navigate("/SignIn");
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/user/Authentication",
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.status === 200) {
        navigate("/CheckOut");
      }
    } catch (error) {
      navigate("/SignIn");
    }
  };

  const signOutHandler = () => {
    sessionStorage.removeItem("user");
    dispatch(
      cartAction.replaceCart({ items: [], totalQuantity: 0, subtotal: 0 })
    ); // Reset cart
    dispatch(logout());
  };

  return (
    <Fragment>
      <ScrollToTop />
      {/*---------------------------------- CART OFFCANVAS CONTENT ----------------------------------*/}
      <div>
        <div className={`offcanvas ${isOpen ? "open" : ""}`}>
          <div className="text-sm flex items-center gap-20 fixed bg-blue-600 text-white w-full p-2">
            <h1 className="pt-2 md:text-xl lg:pt-0 lg:text-xl">
              Shopping Cart
            </h1>
            <div className="flex items-center gap-2">
              <h1 className="md:text-xl lg:text-xl">subtotal :</h1>
              <h1 className="text-xs md:text-xl lg:text-xl">
                GH¢
                {subtotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h1>
            </div>
            <button onClick={toggleOffcanvas} className="">
              <FaTimes className="hover:text-red-600 active:text-white border-red-700 text-xl font-bold" />
            </button>
          </div>
          <div className="offcanvas-content font-serif">
            <div className="block">
              <ul>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.productId}
                    item={{
                      productId: item.productId,
                      price: item.price,
                      totalPrice: item.totalPrice,
                      quantity: item.quantity,
                      description: item.description,
                      productImage: item.productImage,
                    }}
                  />
                ))}
              </ul>
            </div>
          </div>
          {cartItems.length === 0 ? (
            <span className="flex justify-center items-center gap-4 text-xl mt-24">
              <FaCartFlatbed className="text-blue-600" />
              <p>Your cart is empty</p>
            </span>
          ) : (
            <>
              <button
                onClick={checkOutHandler}
                className="mt-8 m-2 w-full bg-blue-10006 p-2 text-center text-white font-bold text-xl md:text-xl md:p-2 hover:bg-blue-600"
              >
                Check Out
              </button>
            </>
          )}
        </div>
        <div
          onClick={toggleOffcanvas}
          className={`overlay ${isOpen ? "open" : ""}`}
        />
      </div>

      <header className="mt-5 lg:mt-0 relative">
        {/*---------------------------------- SMALL SCREEN & MEDIUM SCREEN NAVBAR ----------------------------------*/}
        {/* SMALL & MEDIUM SCREEN NAVBAR ICONS */}
        <div className="py-5 px-2 bg-blue-600 lg:hidden fixed w-full top-0 z-10">
          <div className="flex justify-between">
            <div className="flex lg:hidden">
              <div
                onClick={toggleOffcanvas2}
                className="border p-3 mr-3 md:mx-2"
              >
                <GiHamburgerMenu className="text-white text-xl opacity-50" />
              </div>

              <h1 className="font-serif uppercase text-white text-xl ml-3 pt-2">
                Frambeg Tech
              </h1>
            </div>
            {/* SMALL & MEDUIM SCREEN CART */}
            <CartFile onClick={toggleOffcanvas} />
          </div>
          <div className="mt-4 lg:hidden">
            <SearchInput />
          </div>
        </div>

        <div>
          <div className={`offcanvas2 ${isOpen2 ? "open2" : ""}`}>
            <div className="border-b border-black">
              <div className="flex text-xl m-4 ">
                <FaTimes
                  onClick={toggleOffcanvas2}
                  className="mt-2 md:text-2xl hover:text-red-500"
                />
                <div className="flex ml-4 md:ml-8">
                  <h1 className="text-xl md:text-2xl font-bold uppercase">
                    Frambeg Tech
                  </h1>
                  <img
                    src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
                    className="w-8 h-8"
                    alt="LogoImage"
                  />
                </div>
              </div>
            </div>

            <div className="offcanvas-content2">
              {/* OFFCANVAS BODY */}
              <nav className="text-blue-400">
                <nav>
                  <ul className="list-none text-base cursor-pointer">
                    <div className="flex gap-x-2">
                      <AiFillHome className="text-black mt-2.5 text-xl md:text-3xl md:mt-5" />
                      <li
                        className={`py-2 lg:hover:opacity-50 text-md md:py-4 md:text-3xl  ${HomePageColor}`}
                      >
                        <NavLink to="/">Home</NavLink>
                      </li>
                    </div>

                    <li
                      className={`py-2 lg:hover:opacity-50 text-md md:py-4 md:text-3xl ${AllProductsPageColor}`}
                    >
                      <NavLink to="/AllProducts">All Products</NavLink>
                    </li>
                    <li
                      className={`py-2 lg:hover:opacity-50 text-md md:py-4 md:text-3xl ${HomeApplianceColor}`}
                    >
                      <NavLink to="/HomeAppliance">Home Appliances</NavLink>
                    </li>
                    <li
                      className={`py-2 lg:hover:opacity-50 text-md md:py-4 md:text-3xl ${AudioAndVideoColor}`}
                    >
                      <NavLink to="/AudioAndVideo">Audio & Video</NavLink>
                    </li>
                    <li
                      className={`py-2 lg:hover:opacity-50 text-md md:py-4 md:text-3xl ${RefrigeratorsPageColor}`}
                    >
                      <NavLink to="/Refrigerators">Refrigerator</NavLink>
                    </li>
                    <li
                      className={`py-2 lg:hover:opacity-50 text-md md:py-4 md:text-3xl ${NewArrivalPageColor}`}
                    >
                      <NavLink to="/NewArrival">New Arrivals</NavLink>
                    </li>
                    <li
                      className={`py-2 lg:hover:opacity-50 text-md md:py-4 md:text-3xl ${TodaysDealsPageColor}`}
                    >
                      <NavLink to="/TodaysDeals">Today's Deals</NavLink>
                    </li>
                    {isLoggedIn ? (
                      <button
                        onClick={signOutHandler}
                        className="flex items-center active:text-red-600 p-2 lg:hover:opacity-50 lg:text-lg"
                      >
                        Sign Out
                      </button>
                    ) : (
                      <Link
                        to="/Login"
                        className="border-2 border-white px-2 hover:text-blue-800"
                      >
                        sign in
                      </Link>
                    )}
                  </ul>
                </nav>
              </nav>
            </div>
          </div>
          <div
            onClick={toggleOffcanvas2}
            className={`overlay2 ${isOpen2 ? "open2" : ""}`}
          />
        </div>

        {/*---------------------------------- LARGE SCREEN NAVIGATION BARS ---------------------------------- */}
        <nav className="font-serif hidden lg:block bg-blue-600 fixed w-full top-0 z-10">
          <div className="flex justify-center text-white lg:block">
            <div className="flex justify-between text-sm py-2 lg:w-4/5 lg:m-auto">
              <h1 className=" text-white mx-2">
                24/7 Customer Service +233 596498006
              </h1>
              <div className="flex mx-2">
                <h1 className=" text-white mr-2">Shipping & return</h1>
                <h1 className="uppercase text-white ml-2">Track order</h1>
              </div>
            </div>

            {/* SEARCH BUTTON */}
            <div className="bg-blue-1000 p-2">
              <div className="flex justify-between py-2 lg:w-4/5 lg:m-auto">
                <div className="flex">
                  <img
                    className="w-8"
                    src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
                    alt="logoImage"
                  />
                  <h1 className="font-serif uppercase text-white text-2xl pt-2 mx-2">
                    Frambeg Tech
                  </h1>
                </div>
                <SearchInput />
              </div>
            </div>

            <nav>
              <ul className=" flex justify-between list-none text-base lg:w-4/5 lg:m-auto">
                <li
                  className={`p-2 lg:hover:opacity-50 lg:text-lg ${HomePageColor}`}
                >
                  <NavLink to="/" end>
                    Home
                  </NavLink>
                </li>
                <li
                  className={`p-2 lg:hover:opacity-50 lg:text-lg ${AllProductsPageColor}`}
                >
                  <NavLink to="/AllProducts">All Products</NavLink>
                </li>
                <li
                  className={`p-2 lg:hover:opacity-50 lg:text-lg ${HomeApplianceColor}`}
                >
                  <NavLink to="/HomeAppliance">Home Appliances</NavLink>
                </li>
                <li
                  className={`p-2 lg:hover:opacity-50 lg:text-lg ${AudioAndVideoColor}`}
                >
                  <NavLink to="/AudioAndVideo">Audio & Video</NavLink>
                </li>
                <li
                  className={`p-2 lg:hover:opacity-50 lg:text-lg ${RefrigeratorsPageColor}`}
                >
                  <NavLink to="/Refrigerators">Refrigerator</NavLink>
                </li>
                <li
                  className={`p-2 lg:hover:opacity-50 lg:text-lg ${NewArrivalPageColor}`}
                >
                  <NavLink to="/NewArrival">New Arrivals</NavLink>
                </li>
                <li
                  className={`p-2 lg:hover:opacity-50 lg:text-lg ${TodaysDealsPageColor}`}
                >
                  <NavLink to="/TodaysDeals">Today's Deals</NavLink>
                </li>

                {/* LARGE SCREEN CART */}
                <li>
                  <CartFile onClick={toggleOffcanvas} />
                </li>
                {isLoggedIn ? (
                  <button
                    onClick={signOutHandler}
                    className="flex items-center active:text-red-600 p-2 lg:hover:opacity-50 lg:text-lg"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link
                    to="/SignIn"
                    className="flex items-center active:text-red-600 p-2 lg:hover:opacity-50 lg:text-lg"
                  >
                    Sign in
                  </Link>
                )}
              </ul>
            </nav>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavigationBar;
