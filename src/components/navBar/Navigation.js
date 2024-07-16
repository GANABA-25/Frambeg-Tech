import { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { motion, spring } from "framer-motion";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaCartFlatbed } from "react-icons/fa6";

import CartFile from "../cart/CartFile";
import SearchInput from "./SearchInput";
import CartItem from "../cart/CartItems";
import ScrollToTop from "../../pages/components/ScrollToTop";
import Modal from "../model/Modal";
import Login from "../../pages/page/authentication/Login";
import Signup from "../../pages/page/authentication/Signup";
import ResetPassword from "../../pages/page/authentication/ResetPassword";

import "../offcanvas/Offcanvas.css";
import "../offcanvas/Offcanvas2.css";

const NavigationBar = ({ onHandleInputInNav, onHandleCheckSearchValue }) => {
  const location = useLocation();
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

  // const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const subtotal = useSelector((state) => state.cart.subtotal);

  const cartItems = useSelector((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const toggleOffcanvas2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  //modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSignupModal = () => {
    setSignUpModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignUpModalOpen(false);
  };

  const openResetPasswordModal = () => {
    setIsResetPasswordModalOpen(true);
  };

  const closeResetPasswordModal = () => {
    setIsResetPasswordModalOpen(false);
  };

  const closeOffcanvasAndOpenSignupModal = () => {
    setTimeout(() => {
      setSignUpModalOpen(true);
    }, 250);

    toggleOffcanvas2();
  };

  const closeOffcanvasAndOpenModal = () => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 250);

    toggleOffcanvas2();
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
                    key={item.id}
                    item={{
                      id: item.id,
                      price: item.price,
                      total: item.totalPrice,
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
              <div className="grid gap-2 mt-8 m-2">
                <Link
                  to="/CartPage"
                  className="bg-blue-10006 p-2 text-center text-white font-bold text-xl md:text-xl md:p-2 hover:bg-blue-600"
                >
                  <h1>View Cart</h1>
                </Link>

                <div className="bg-blue-10006 p-2 text-center text-white font-bold text-xl md:text-xl md:p-2 hover:bg-blue-600">
                  <h1>Check Out</h1>
                </div>
              </div>
            </>
          )}
        </div>
        <div
          onClick={toggleOffcanvas}
          className={`overlay ${isOpen ? "open" : ""}`}
        ></div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Login
          onClose={closeModal}
          isOpen={openSignupModal}
          onReset={openResetPasswordModal}
        />
      </Modal>

      <Modal isOpen={isSignUpModalOpen} onClose={closeSignupModal}>
        <Signup onClose={closeSignupModal} isOpen={openModal} />
      </Modal>

      <Modal
        isOpen={isResetPasswordModalOpen}
        onClose={closeResetPasswordModal}
      >
        <ResetPassword onClose={closeResetPasswordModal} />
      </Modal>

      <header className="mt-5 lg:mt-0 relative">
        {/*---------------------------------- SMALL SCREEN & MEDIUM SCREEN NAVBAR ----------------------------------*/}
        {/* SMALL & MEDIUM SCREEN NAVBAR ICONS */}
        <div className=" py-5 px-2 bg-blue-600 lg:hidden fixed w-full top-0 z-10">
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
            <SearchInput
              onCheckSearchValue={(checkSearchWord) =>
                onHandleCheckSearchValue(checkSearchWord)
              }
              onHandleInput={(searchWord) => onHandleInputInNav(searchWord)}
            />
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
                        className={`py-2 text-md md:py-4 md:text-3xl  ${HomePageColor}`}
                      >
                        <NavLink to="/">Home</NavLink>
                      </li>
                    </div>

                    <li
                      className={`py-2 text-md md:py-4 md:text-3xl ${AllProductsPageColor}`}
                    >
                      <NavLink to="/AllProducts">All Products</NavLink>
                    </li>
                    <li
                      className={`py-2 text-md md:py-4 md:text-3xl ${HomeApplianceColor}`}
                    >
                      <NavLink to="/HomeAppliance">Home Appliances</NavLink>
                    </li>
                    <li
                      className={`py-2 text-md md:py-4 md:text-3xl ${AudioAndVideoColor}`}
                    >
                      <NavLink to="/AudioAndVideo">Audio & Video</NavLink>
                    </li>
                    <li
                      className={`py-2 text-md md:py-4 md:text-3xl ${RefrigeratorsPageColor}`}
                    >
                      <NavLink to="/Refrigerators">Refrigerator</NavLink>
                    </li>
                    <li
                      className={`py-2 text-md md:py-4 md:text-3xl ${NewArrivalPageColor}`}
                    >
                      <NavLink to="/NewArrival">New Arrivals</NavLink>
                    </li>
                    <li
                      className={`py-2 text-md md:py-4 md:text-3xl ${TodaysDealsPageColor}`}
                    >
                      <NavLink to="/TodaysDeals">Today's Deals</NavLink>
                    </li>
                    <button
                      onClick={closeOffcanvasAndOpenModal}
                      className="border-2 border-white px-2 hover:text-blue-800"
                    >
                      Login
                    </button>

                    <button
                      onClick={closeOffcanvasAndOpenSignupModal}
                      className="border-2 border-white px-2 hover:text-blue-800"
                    >
                      SignUp
                    </button>
                  </ul>
                </nav>
              </nav>
            </div>
          </div>
          <div
            onClick={toggleOffcanvas2}
            className={`overlay2 ${isOpen2 ? "open2" : ""}`}
          ></div>
        </div>

        {/*---------------------------------- LARGE SCREEN NAVIGATION BARS ---------------------------------- */}
        <nav className="font-serif hidden lg:block bg-blue-600 fixed w-full top-0 z-10">
          <div className="flex justify-center text-white lg:block">
            <div className="flex justify-between text-sm py-2 lg:w-4/5 lg:m-auto">
              <h1
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3, type: "spring" }}
                className=" text-white mx-2"
              >
                24/7 Customer Service +233 596498006
              </h1>
              <div
                initial={{ opacity: 0, x: 75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3, type: "spring" }}
                className="flex mx-2"
              >
                <h1 className=" text-white mr-2">Shipping & return</h1>
                <h1 className="uppercase text-white ml-2">Track order</h1>
              </div>
            </div>

            {/* SEARCH BUTTON */}
            <div className="bg-blue-1000 p-2">
              <div className="flex justify-between py-2 lg:w-4/5 lg:m-auto">
                <div
                  initial={{ opacity: 0, x: -75 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 3, type: "spring" }}
                  className="flex"
                >
                  <img
                    className="w-8"
                    src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
                    alt="logoImage"
                  />
                  <h1 className="font-serif uppercase text-white text-2xl pt-2 mx-2">
                    Frambeg Tech
                  </h1>
                </div>
                <SearchInput
                  onCheckSearchValue={(checkSearchWord) =>
                    onHandleCheckSearchValue(checkSearchWord)
                  }
                  onHandleInput={(searchWord) => onHandleInputInNav(searchWord)}
                />
              </div>
            </div>

            <nav>
              <ul className=" flex justify-between list-none text-base lg:w-4/5 lg:m-auto">
                <motion.li
                  initial={{ opacity: 0, x: -75, scale: 0.2 }}
                  animate={{ opacity: 1, x: 1, scale: 1 }}
                  transition={{ duration: 3, type: "spring" }}
                  className={`p-2 lg:text-lg ${HomePageColor}`}
                >
                  <NavLink to="/" end>
                    Home
                  </NavLink>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -75, scale: 0.5 }}
                  animate={{ opacity: 1, x: 1, scale: 1 }}
                  transition={{ duration: 3, delay: 0.3, type: "spring" }}
                  className={`p-2 lg:text-lg ${AllProductsPageColor}`}
                >
                  <NavLink to="/AllProducts">All Products</NavLink>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -75, scale: 0.5 }}
                  animate={{ opacity: 1, x: 1, scale: 1 }}
                  transition={{ duration: 3, delay: 0.4, type: "spring" }}
                  className={`p-2 lg:text-lg ${HomeApplianceColor}`}
                >
                  <NavLink to="/HomeAppliance">Home Appliances</NavLink>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -75, scale: 0.5 }}
                  animate={{ opacity: 1, x: 1, scale: 1 }}
                  transition={{ duration: 3, delay: 0.5, type: "spring" }}
                  className={`p-2 lg:text-lg ${AudioAndVideoColor}`}
                >
                  <NavLink to="/AudioAndVideo">Audio & Video</NavLink>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -75, scale: 0.5 }}
                  animate={{ opacity: 1, x: 1, scale: 1 }}
                  transition={{ duration: 3, delay: 0.6, type: "spring" }}
                  className={`p-2 lg:text-lg ${RefrigeratorsPageColor}`}
                >
                  <NavLink to="/Refrigerators">Refrigerator</NavLink>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -75, scale: 0.5 }}
                  animate={{ opacity: 1, x: 1, scale: 1 }}
                  transition={{ duration: 3, delay: 0.7, type: "spring" }}
                  className={`p-2 lg:text-lg ${NewArrivalPageColor}`}
                >
                  <NavLink to="/NewArrival">New Arrivals</NavLink>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -75, scale: 0.5 }}
                  animate={{ opacity: 1, x: 1, scale: 1 }}
                  transition={{ duration: 3, delay: 0.8, type: "spring" }}
                  className={`p-2 lg:text-lg ${TodaysDealsPageColor}`}
                >
                  <NavLink to="/TodaysDeals">Today's Deals</NavLink>
                </motion.li>

                {/* LARGE SCREEN CART */}
                <motion.span
                  initial={{ opacity: 0, x: -75, scale: 0.5 }}
                  animate={{ opacity: 1, x: 1, scale: 1 }}
                  transition={{ duration: 3, delay: 0.9, type: "spring" }}
                >
                  <CartFile onClick={toggleOffcanvas} />
                </motion.span>

                <motion.li
                  initial={{ opacity: 0, x: -75, scale: 0.5 }}
                  animate={{ opacity: 1, x: 1, scale: 1 }}
                  transition={{ duration: 3, delay: 0.8, type: "spring" }}
                  className={`p-2 lg:text-lg ${TodaysDealsPageColor}`}
                >
                  <button
                    onClick={openModal}
                    className="border-2 border-white px-2 hover:text-blue-800"
                  >
                    Login
                  </button>

                  <button
                    onClick={openSignupModal}
                    className="border-2 border-white px-2 hover:text-blue-800"
                  >
                    SignUp
                  </button>
                </motion.li>
              </ul>
            </nav>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavigationBar;
