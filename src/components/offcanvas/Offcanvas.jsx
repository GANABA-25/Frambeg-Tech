import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Offcanvas.css";

import { FaTimes } from "react-icons/fa";

const Offcanvas = (props) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleOffcanvas2 = () => {
  //     setIsOpen(!isOpen);
  //   };

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
      ? setHomePageColor("text-red-600")
      : setHomePageColor("");

    location.pathname === "/AllProducts"
      ? setAllProductsPageColor("text-red-600")
      : setAllProductsPageColor("");

    location.pathname === "/HomeAppliance"
      ? setHomeApplianceColor("text-red-600")
      : setHomeApplianceColor("");

    location.pathname === "/AudioAndVideo"
      ? setAudioAndVideoColor("text-red-600")
      : setAudioAndVideoColor("");

    location.pathname === "/Refrigerators"
      ? setRefrigeratorsPageColor("text-red-600")
      : setRefrigeratorsPageColor("");

    location.pathname === "/NewArrival"
      ? setNewArrivalPageColor("text-red-600")
      : setNewArrivalPageColor("");

    location.pathname === "/TodaysDeals"
      ? setTodaysDealsPageColor("text-red-600")
      : setTodaysDealsPageColor("");
  }, [location.pathname]);

  return (
    <div>
      <div className={`offcanvas on-scrollbar ${isOpen2 ? "open" : ""}`}>
        <div className="text-sm border-b-2 flex fixed top-0 bg-blue-600 text-white w-full p-2">
          <button onClick={props.onClick} className="ml-24">
            <FaTimes className="hover:text-red-600 active:text-white border-red-700 text-xl font-bold" />
          </button>
        </div>
        <div className="offcanvas-content">
          {/*---------- OFFCANVAS BODY ---------- */}
          <div className="block">
            {/* SMALL SCREEN & MEDIUM SCREEN NAVBAR */}

            <nav className="text-blue-400 mt-20">
              <nav>
                <ul className="list-none text-base">
                  <li className={`p-2 md:text-2xl ${HomePageColor}`}>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className={`p-2 md:text-2xl ${AllProductsPageColor}`}>
                    <NavLink to="/AllProducts">All Products</NavLink>
                  </li>
                  <li className={`p-2 md:text-2xl ${HomeApplianceColor}`}>
                    <NavLink to="/HomeAppliance">Home Appliances</NavLink>
                  </li>
                  <li className={`p-2 md:text-2xl ${AudioAndVideoColor}`}>
                    <NavLink to="/AudioAndVideo">Audio & Video</NavLink>
                  </li>
                  <li className={`p-2 md:text-2xl ${RefrigeratorsPageColor}`}>
                    <NavLink to="/Refrigerators">Refrigerator</NavLink>
                  </li>
                  <li className={`p-2 md:text-2xl ${NewArrivalPageColor}`}>
                    <NavLink to="/NewArrival">New Arrivals</NavLink>
                  </li>
                  <li className={`p-2 md:text-2xl ${TodaysDealsPageColor}`}>
                    <NavLink to="/TodaysDeals">Today's Deals</NavLink>
                  </li>
                </ul>
              </nav>
            </nav>
            {/* SMALL SCREEN & MEDIUM SCREEN NAVBAR END */}
          </div>
          {/*---------- OFFCANVAS BODY END ---------- */}
        </div>
      </div>
      <div
        onClick={props.onClick}
        className={`overlay ${isOpen2 ? "open" : ""}`}
      ></div>
    </div>
  );
};

export default Offcanvas;
