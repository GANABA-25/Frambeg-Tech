import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { cartAction } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { title, price, discount, total, description, productImage, id } =
    props;

  const addToCartHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        price,
        discount,
        total,
        description,
        productImage,
      })
    );
  };
  return (
    <Fragment>
      <div>
        <div className="grid justify-center uppercase">
          <div
            onClick={() =>
              navigate("/ProductDetails", {
                state: { payload: props },
              })
            }
            className="group bg-blue-10003 flex justify-center p-2"
          >
            <img
              src={props.productImage}
              alt="Initial Image"
              className="h-26 md:h-36 lg:h-46 text-center m-8 object-cover group-hover:hidden opacity-100 group-hover:opacity-0 transition duration-600 ease-in-out"
            />
            <img
              src={props.productImage2}
              alt="Hover Image"
              className="h-26 md:h-36 lg:h-46 text-center m-8 object-cover hidden opacity-0 group-hover:block group-hover:opacity-100 transition duration-600 ease-in-out"
            />
          </div>
          <div className="mt-2 text-sm font-bold md:text-xl">
            <h1>{props.productName}</h1>
          </div>

          <div className="py-4">
            <h4 className="text-sm cursor-pointer md:text-base leading-5 tracking-wide md:tracking-widest md:leading-6 lg:tracking-wide lg:leading-6">
              {props.description}
            </h4>
            <div className="flex justify-between mt-2 text-center">
              <div className="relative">
                <p className="line-through">GH¢ {props.discount}</p>
              </div>
              <p className="font-bold opacity-75 text-xs pt-1 md:text-sm lg:text-mb">
                GH¢
                {props.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <button
                onClick={addToCartHandler}
                className="bg-slate-950 text-white p-2 rounded-md text-tb lg:text-xb hover:bg-blue-600 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg"
              >
                addToCart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductItem;
