import ProductItem from "../../components/ProductItem";

const NewArrivalProducts = ({ NewArrivalData }) => {
  return (
    <div className="grid grid-cols-2 mx-4 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0">
      {NewArrivalData?.map((NewArrival) => (
        <ProductItem
          key={NewArrival.id}
          id={NewArrival.id}
          productImage={NewArrival.productImage}
          productImage2={NewArrival.productImage2}
          productName={NewArrival.productName}
          description={NewArrival.description}
          price={NewArrival.price}
          addToCart={NewArrival.addToCart}
        />
      ))}
    </div>
  );
};

export default NewArrivalProducts;
