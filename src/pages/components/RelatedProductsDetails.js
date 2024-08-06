const RelatedProductsDetails = (props) => {
  return (
    <div className="h-full flex flex-col justify-between border-2">
      <div className="mb-auto">
        <div className="group bg-blue-10003 flex justify-center">
          <img
            src={props.productImage}
            alt="Initial"
            className="h-26 md:h-36 lg:h-46 text-center m-8 object-cover lg:group-hover:hidden opacity-100 lg:group-hover:opacity-0 transition duration-600 ease-in-out"
          />
          <img
            src={props.productImage2}
            alt="second"
            className="h-26 md:h-36 lg:h-46 text-center m-8 object-cover hidden opacity-0 lg:group-hover:block lg:group-hover:opacity-100 transition duration-600 ease-in-out"
          />
        </div>

        <div className="p-2 grid gap-4">
          <div className=" text-sm font-bold md:text-xl">
            <h1>{props.productName}</h1>
          </div>
          <h4 className="text-sm cursor-pointer md:text-base leading-5 tracking-wide md:tracking-widest md:leading-6 lg:tracking-wide lg:leading-6">
            {props.description}
          </h4>
        </div>
      </div>

      <div className="px-2 pb-2 flex justify-between items-center mt-4">
        <p className="font-bold opacity-75 text-xs md:text-sm lg:text-mb">
          GH¢
          {props.price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};

export default RelatedProductsDetails;
