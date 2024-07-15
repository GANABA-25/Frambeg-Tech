import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FaCartFlatbed } from "react-icons/fa6";

import NavigationBar from "../../components/navBar/Navigation";
import CartItem from "../../components/cart/CartItems";
import Footer from "../components/Footer";
import Modal from "../../components/model/Modal";
import Login from "./Login";
import Signup from "./Signup";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

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

  // const closeOffcanvasAndOpenSignupModal = () => {
  //   setTimeout(() => {
  //     setSignUpModalOpen(true);
  //   }, 250);
  // };

  // const closeOffcanvasAndOpenModal = () => {
  //   setTimeout(() => {
  //     setIsModalOpen(true);
  //   }, 250);
  // };

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const openSignupModal = () => {
  //   setSignUpModalOpen(true);
  // };

  // const closeOffcanvasAndOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const isLoggedIn = false;

  const CheckUserStatusHandler = (e) => {
    e.preventDefault();
    try {
      if (isLoggedIn) {
        console.log("loggedIn ");
      } else {
        console.log("not LoggedIn");
        openModal();
      }
    } catch (error) {
      console.log("user is Not LoggedIn please loggedIN");
    }
  };
  return (
    <div>
      <NavigationBar />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Login onClose={closeModal} isOpen={openSignupModal} />
      </Modal>

      <Modal isOpen={isSignUpModalOpen} onClose={closeSignupModal}>
        <Signup onClose={closeSignupModal} isOpen={openModal} />
      </Modal>
      <section className=" py-24 lg:mt-24 m-4 font-serif lg:w-4/5 lg:m-auto">
        <div className="flex justify-between border-b-2 border-blue-600">
          <div className="text-4xl font-bold mt-3">
            <h1>Cart</h1>
          </div>

          <div className="bg-blue-10006 p-2 text-white w-40 my-4 text-center font-bold hover:bg-blue-600 cursor-pointer">
            <Link to="/AllProducts">Return to Shop</Link>
          </div>
        </div>
        {cartItems.length === 0 ? (
          <span className="flex justify-center items-center gap-4 text-xl mt-6">
            <FaCartFlatbed className="text-blue-600" />
            <p>Your cart is empty</p>
          </span>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5">
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
          </div>
        )}

        <div className=" md:justify-center md:items-center justify-between mt-8 border-t-2 border-blue-600 w-full">
          <div>
            <h1 className="text-center text-2xl font-bold my-3 md:text-4xl">
              Cart Total
            </h1>
            <div className="flex md:justify-between md:gap-0 gap-48 mb-4 md:m-4">
              <span className="md:text-4xl">subtotal :</span>
              <h1 className="mt-1 ml-2 text-xs md:text-3xl md:mt-0 lg:text-xl lg:mt-0">
                ¢
                {subtotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h1>
            </div>

            <div className="flex gap-52 md:justify-between md:gap-0 md:m-4">
              <span className="md:text-4xl">Total :</span>
              <h1 className="mt-1 ml-2 text-xs md:text-3xl md:mt-0 lg:text-xl lg:mt-0 ">
                ¢
                {subtotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h1>
            </div>

            <p
              onClick={CheckUserStatusHandler}
              className="uppercase bg-blue-10006 hover:bg-blue-600 rounded-full p-2 cursor-pointer text-white text-center mt-4 md:text-3xl"
            >
              Proceed to checkout
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CartPage;
