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
const BrandDeals = () => {
  return (
    <Fragment>
      <div className="m-4 mt-10  lg:grid lg:grid-cols-2 lg:gap-4 lg:w-4/5 lg:m-auto  lg:mt-4 lg:py-10">
        {dummyData.map((Data) => (
          <ImageWithText
            image={Data.image}
            label={Data.label}
            text={Data.text}
            extraText={Data.extraText}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default BrandDeals;
