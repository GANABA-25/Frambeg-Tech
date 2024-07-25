import { Fragment } from "react";

const HomeProducts = [
  {
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541575/FrambegTech/HOME%20PAGE/air-conditioner_bmp6ng.png",
    title: "Air Conditioner",
    description: "5 products",
  },
  {
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541606/FrambegTech/HOME%20PAGE/tv_pvkezp.png",
    title: "Audio & Video",
    description: "6 products",
  },
  {
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541596/FrambegTech/HOME%20PAGE/Phone_tbjy1a.png",
    title: "Gadgets",
    description: "5 products",
  },
  {
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541608/FrambegTech/HOME%20PAGE/washing-machine_lluqxz.png",
    title: "Home Appliance",
    description: "9 products",
  },
  {
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541591/FrambegTech/HOME%20PAGE/Microwave_rfkgcr.png",
    title: "Kitchen Appliance",
    description: "6 products",
  },
  {
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541590/FrambegTech/HOME%20PAGE/Laptop_ybu2rq.png",
    title: "Pcs & Laptops",
    description: "7 products",
  },
  {
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541584/FrambegTech/HOME%20PAGE/Fridge_cx0ymj.png",
    title: "Refrigerators",
    description: "5 products",
  },
  {
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541599/FrambegTech/HOME%20PAGE/Smart_renbjk.png",
    title: "Smart Home",
    description: "8 products",
  },
];

const AvailableProducts = () => {
  return (
    <Fragment>
      <section className="md:mt-40 lg:mt-24 mt-8 m-4 lg:m-0">
        <div className="grid grid-cols-2 shadow-md md:grid-cols-3 lg:grid-cols-4  gap-x-20 gap-y-20 bg-white border-2 py-24 px-10 lg:w-4/5 lg:m-auto">
          <div className=" grid justify-center text-center uppercase">
            <img
              className="h-48"
              src={HomeProducts[0].productImage}
              alt="productsImage"
            ></img>
            <div className="py-4 ">
              <h1 className="font-bold">{HomeProducts[0].title}</h1>
              <p className="text-sb opacity-50">
                {HomeProducts[0].description}
              </p>
            </div>
          </div>

          <div className=" grid justify-center text-center uppercase">
            <img
              className="h-48"
              src={HomeProducts[1].productImage}
              alt="productsImage"
            ></img>
            <div className="py-4 ">
              <h1 className="font-bold">{HomeProducts[1].title}</h1>
              <p className="text-sb opacity-50">
                {HomeProducts[1].description}
              </p>
            </div>
          </div>

          <div className=" grid justify-center text-center uppercase">
            <img
              className="h-48"
              src={HomeProducts[2].productImage}
              alt="productsImage"
            ></img>
            <div className="py-4 ">
              <h1 className="font-bold">{HomeProducts[2].title}</h1>
              <p className="text-sb opacity-50">
                {HomeProducts[2].description}
              </p>
            </div>
          </div>

          <div className=" grid justify-center text-center uppercase">
            <img
              className="h-48"
              src={HomeProducts[3].productImage}
              alt="productsImage"
            ></img>
            <div className="py-4 ">
              <h1 className="font-bold">{HomeProducts[3].title}</h1>
              <p className="text-sb opacity-50">
                {HomeProducts[3].description}
              </p>
            </div>
          </div>

          <div className=" grid justify-center text-center uppercase">
            <img
              className="h-48"
              src={HomeProducts[4].productImage}
              alt="productsImage"
            ></img>
            <div className="py-4 ">
              <h1 className="font-bold">{HomeProducts[4].title}</h1>
              <p className="text-sb opacity-50">
                {HomeProducts[4].description}
              </p>
            </div>
          </div>

          <div className=" grid justify-center text-center uppercase">
            <img
              className="h-48"
              src={HomeProducts[5].productImage}
              alt="productsImage"
            ></img>
            <div className="py-4 ">
              <h1 className="font-bold">{HomeProducts[5].title}</h1>
              <p className="text-sb opacity-50">
                {HomeProducts[5].description}
              </p>
            </div>
          </div>

          <div className=" grid justify-center text-center uppercase">
            <img
              className="h-48"
              src={HomeProducts[6].productImage}
              alt="productsImage"
            ></img>
            <div className="py-4 ">
              <h1 className="font-bold">{HomeProducts[6].title}</h1>
              <p className="text-sb opacity-50">
                {HomeProducts[6].description}
              </p>
            </div>
          </div>

          <div className=" grid justify-center text-center uppercase">
            <img
              className="h-48"
              src={HomeProducts[7].productImage}
              alt="productsImage"
            ></img>
            <div className="py-4 ">
              <h1 className="font-bold">{HomeProducts[7].title}</h1>
              <p className="text-sb opacity-50">
                {HomeProducts[7].description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AvailableProducts;
