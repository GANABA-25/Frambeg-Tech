import { Fragment } from "react";
import { Link } from "react-router-dom";

import ProductItem from "../../components/ProductItem";

const TodaysBestDeals = ({ HomePageProducts }) => {
  return (
    <Fragment>
      <section className="mt-10 m-4 border-2 shadow-md lg:w-4/5 lg:m-auto">
        <div className="lg:flex font-bold mb-8 m-4">
          <h1 className="text-2xl opacity-75">Today's best deal</h1>
          <Link
            to="/TodaysDeals"
            className="text-blue-600 text-xl hover:-translate-x-1 hover:scale-110 duration-300 lg:ml-5 lg:text-xl"
          >
            see more
          </Link>
        </div>
        <div className="grid grid-cols-2 mb-8 gap-x-2 gap-y-8 md:grid-cols-3 md:mx-4 lg:grid-cols-4">
          {HomePageProducts?.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              productImage={product.productImage}
              productImage2={product.productImage2}
              description={product.description}
              productName={product.productName}
              price={product.price}
              addToCart={product.addToCart}
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default TodaysBestDeals;
