import { Fragment, useState } from "react";

import NavigationBar from "../../../components/navBar/Navigation";

import Carousel from "../../components/Carousel";
import Offers from "./Offers";
import BrandDeals from "./BrandDeals";
import AvailableProducts from "./AvailableProducts";
import TodaysBestDeals from "./TodaysBestDeals";
import TopBrands from "./TopBrands";
import CustomerComments from "./CustomerComments";
import Footer from "../../components/Footer";

const HomePageProducts = [
  {
    id: "b1",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541606/FrambegTech/HOME%20PAGE/trimmer_jdadmp.png",
    productImage2: "",
    productName: "samsung tv1",
    description:
      "The all-in-1 trimmer for your choice of beard, head, body, face hairstyling and other trimming needs. To deliver maximum power,",
    price: 2400,
    addToCart: "Add To Cart",
  },
  {
    id: "b2",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541603/FrambegTech/HOME%20PAGE/smartSpeaker_dvzmp3.png",
    productName: "samsung tv2",
    description:
      "Mini Speaker has a light weight and small size, which makes it easy to carry and use. A speaker that enables the user to listen to music.",
    price: 3540,
    addToCart: "Add To Cart",
  },
  {
    id: "b3",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541587/FrambegTech/HOME%20PAGE/homeSpeaker_fylaiu.png",
    productName: "samsung tv3",
    description:
      "The speaker features SmartThings Hub integration, allowing it to control other smart home appliances compatible.",
    price: 4490,
    addToCart: "Add To Cart",
  },
  {
    id: "b4",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541602/FrambegTech/HOME%20PAGE/tablet_xfafto.png",
    productName: "samsung tv4",
    description:
      "All Samsung Galaxy Tabs come with Android and One UI, front and rear facing cameras, microSD memory expansion and seamless.",
    price: 2540,
    addToCart: "Add To Cart",
  },
  {
    id: "b5",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541594/FrambegTech/HOME%20PAGE/Phone_1_xezh4n.png",
    productName: "samsung tv5",
    description:
      "Galaxy S22 Ultra smartphone offers a 108-megapixel camera and can shoot video in 8K ultra-high-definition resolution.",
    price: 3440,
    addToCart: "Add To Cart",
  },
  {
    id: "b6",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541595/FrambegTech/HOME%20PAGE/Phone_2_fpfg1s.png",
    productName: "samsung tv6",
    description:
      "Galaxy S22 Ultra smartphone offers a 108-megapixel camera and can shoot video in 8K ultra-high-definition resolution.",
    price: 4590,
    addToCart: "Add To Cart",
  },
  {
    id: "b7",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541588/FrambegTech/HOME%20PAGE/Laptop_2_qrqcme.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541590/FrambegTech/HOME%20PAGE/Laptop_5_zmu5zi.png",
    productName: "samsung tv7",
    description:
      "HP 15s (15s-Eq2143au) is a Windows 11 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels.",
    price: 1440,
    addToCart: "Add To Cart",
  },
  {
    id: "b8",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541590/FrambegTech/HOME%20PAGE/Laptop_5_zmu5zi.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541588/FrambegTech/HOME%20PAGE/Laptop_2_qrqcme.png",
    productName: "samsung tv8",
    description:
      "HP 15s (15s-Eq2143au) is a Windows 11 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels.",
    price: 2540,
    addToCart: "Add To Cart",
  },
];

const Home = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [checkSearchedWord, setCheckedSearchedWord] = useState(false);

  const filteredProducts = HomePageProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchedWord.toLowerCase())
  );
  return (
    <Fragment>
      <NavigationBar
        onHandleCheckSearchValue={(checkSearchedWord) =>
          setCheckedSearchedWord(checkSearchedWord ? true : false)
        }
        onHandleInputInNav={(searchWord) => {
          setSearchedWord(searchWord);
        }}
      />

      <section className="font-serif">
        <Carousel />

        <Offers />

        <AvailableProducts />

        <BrandDeals />

        {checkSearchedWord && filteredProducts.length === 0 ? (
          <div className="ml-16 lg:w-4/5 lg:m-auto">
            <h1 className="text-xl">No results for {searchedWord}</h1>
            <p>Try checking your spelling or use more general terms</p>
          </div>
        ) : (
          <TodaysBestDeals
            HomePageProducts={
              checkSearchedWord ? filteredProducts : HomePageProducts
            }
          />
        )}

        <TopBrands />

        <CustomerComments />

        <Footer />
      </section>
    </Fragment>
  );
};

export default Home;
