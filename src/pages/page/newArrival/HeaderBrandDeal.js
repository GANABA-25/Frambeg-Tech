import { Fragment } from "react";
import ImageWithText from "../../../components/ImageWithText";

const dummyData = [
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541583/FrambegTech/HOME%20PAGE/cover_oo5vyp.jpg",
    label: "The only case you need",
    text: "Shop now",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541577/FrambegTech/HOME%20PAGE/airPod_jax7jp.jpg",
    label: "Get 30% OFF",
    text: "Shop now",
    extraText: "BRAND DAY",
  },
];

const HeaderBrandDeal = () => {
  return (
    <Fragment>
      <div className="mt-32 border-b-2">
        <div className="mx-4 my-8 pb-7 md:flex lg:w-4/5 lg:m-auto">
          <div className="md:w-3/6 md:mt-3 md:border-r-2">
            <h1 className="text-4xl mb-4 font-bold opacity-80 md:text-5xl lg:text-6xl">
              New arrivals
            </h1>
          </div>
          <div className="md:w-3/6 opacity-75 md:text-xl md:border-l-2 md:p-6">
            <p>
              Check out the latest products just in! Discover new items and stay
              updated with the freshest trends and innovations.
            </p>
          </div>
        </div>
      </div>

      <div className="md:m-4 lg:w-4/5 lg:m-auto">
        <div className="py-6 px-4lg:grid md:grid md:grid-cols-2 md:gap-4 lg:m-0 lg:grid-cols-2 lg:gap-4">
          {dummyData.map((Data) => (
            <ImageWithText
              image={Data.image}
              label={Data.label}
              text={Data.text}
              extraText={Data.extraText}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderBrandDeal;
