import React from "react";

const [isOpen, setIsOpen] = useState(false);

const toggleOffcanvas = () => {
  setIsOpen(!isOpen);
};

const CartButton = () => {
  return (
    <div
      className="flex lg:hidden text-white  border hover:border-blue-400 cursor-pointer"
      onClick={toggleOffcanvas}
    >
      <FaCartArrowDown className="m-2 text-3xl" />
      <h1 className=" text-3xl m-2 bg-slate-950 px-2 rounded">
        {cartQuantity}
      </h1>
    </div>
  );
};

export default CartButton;
