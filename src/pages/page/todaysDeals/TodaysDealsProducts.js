import ProductItem from "../../components/ProductItem";

const TodaysDealsProducts = ({ todaysDealsData }) => {
  return (
    <div>
      <div className="grid grid-cols-2 mx-4 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0 lg:ml-16">
        {todaysDealsData?.map((todaysDeals) => (
          <ProductItem
            key={todaysDeals.id}
            id={todaysDeals.id}
            productImage={todaysDeals.productImage}
            productImage2={todaysDeals.productImage2}
            productName={todaysDeals.productName}
            description={todaysDeals.description}
            price={todaysDeals.price}
            discount={todaysDeals.discount}
            addToCart={todaysDeals.addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default TodaysDealsProducts;
