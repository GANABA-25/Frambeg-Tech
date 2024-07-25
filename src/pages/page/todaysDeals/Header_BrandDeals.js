import { Fragment } from "react";

const Header_BrandDeals = () => {
  return (
    <Fragment>
      <div className="border-b-2 mt-32">
        <div className="mx-4 my-8 pb-7 md:flex lg:w-4/5 lg:m-auto">
          <div className="md:w-3/6 md:mt-3 md:border-r-2">
            <h1 className="text-4xl mb-4 font-bold opacity-80 md:text-5xl lg:text-6xl">
              Toady's deals
            </h1>
          </div>
          <div className="md:w-3/6 opacity-75 md:text-xl md:border-l-2 md:p-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              turpis velit, iaculis vel risus.
            </p>
          </div>
        </div>
      </div>
      <div className="md:m-4 lg:w-4/5 lg:m-auto">
        <div className="flex justify-around gap-x-4 bg-blue-600 p-4 my-10 text-white">
          <div>
            <img
              className="w-10 h-10 md:w-20 md:h-20"
              src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542008/FrambegTech/TODAYS%20DEALS/card_yum6hv.png"
              alt="cardImage"
            ></img>
          </div>

          <div className="text-xb md:text-xl md:mt-2">
            <h4>Apply today and get</h4>
            <h1 className="text-yellow-400 text-xl md:text-4xl">10% back</h1>
          </div>
          <div className="text-xxb mt-3 md:text-xs md:mt-6 lg:text-xl lg:mt-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              adipiscing elit. turpis
            </p>
          </div>

          <div className="text-xb mt-2 md:text-sm md:mt-4">
            <button className="bg-white text-black rounded-sm p-1 px-4 md:p-3 md:px-6">
              Order now
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header_BrandDeals;
