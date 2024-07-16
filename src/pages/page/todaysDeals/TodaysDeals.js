import { Fragment, useState } from "react";

import TodaysDealsProducts from "./TodaysDealsProducts";

import ScrollToTop from "../../components/ScrollToTop";
import NavigationBar from "../../../components/navBar/Navigation";
import Header_BrandDeals from "./Header_BrandDeals";
import axios from "axios";
import Footer from "../../components/Footer";

const todaysDealsData = [
  {
    id: "p1",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541456/FrambegTech/AUDIO%20AND%20VIDEOS/camera_1_oluvj6.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541455/FrambegTech/AUDIO%20AND%20VIDEOS/camera_2_z33h9j.png",
    productName: "camera",
    description:
      "With 20 pre-set cooking modes, you can prepare fresh food in minutes. Enhance your kitchen MS23F301TAK microwave oven",
    price: 2400,
    // discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p2",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541997/FrambegTech/TODAYS%20DEALS/camera_1_nkfyzc.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542000/FrambegTech/TODAYS%20DEALS/camera_2_uai3gk.png",
    productName: "camera2",
    description:
      "HP 15s (15s-Eq2143au) is a Windows 11 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels.",
    price: 3540,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p3",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542003/FrambegTech/TODAYS%20DEALS/camera_2_1_bed0sr.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542005/FrambegTech/TODAYS%20DEALS/camera_2_2_pjvsjk.png",
    productName: "camera3",
    description:
      "HP 15s (15s-Eq2143au) is a Windows 11 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels.",
    price: 4490,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p4",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541982/FrambegTech/TODAYS%20DEALS/big_speakers_1_l4961h.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541984/FrambegTech/TODAYS%20DEALS/big_speakers_2_c12ntj.png",
    productName: "bigSpeaker",
    description:
      "HP 15s (15s-Eq2143au) is a Windows 11 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels.",
    price: 2540,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p5",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541987/FrambegTech/TODAYS%20DEALS/bigspeakers_1_a870ez.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541989/FrambegTech/TODAYS%20DEALS/bigspeakers_2_uphmzc.png",
    productName: "bigSpeaker",
    description:
      "HP 15s (15s-Eq2143au) is a Windows 11 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels.",
    price: 3440,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p6",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541993/FrambegTech/TODAYS%20DEALS/blenders_1_md4uxe.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541995/FrambegTech/TODAYS%20DEALS/blenders_2_tny7tj.png",
    productName: "blinder",
    description:
      "Bruhm BWF- 070H 7kg Front Load Washing Machine KShs38,200.00.Automatic 7 Kgs 1000 RPM Silver Color.",
    price: 4590,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p7",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542010/FrambegTech/TODAYS%20DEALS/desktop_1_ubtywf.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542013/FrambegTech/TODAYS%20DEALS/desktop_2_erm5yh.png",
    productName: "desktop",
    description:
      "374L Bottom Freezer Inverter Linear Compressor GC-B459NLXM ; Dimension (mm, WxHxD): 595 x 1,860 x 682.",
    price: 1440,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p8",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542016/FrambegTech/TODAYS%20DEALS/dishWasher_1_kpefmm.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542018/FrambegTech/TODAYS%20DEALS/dishWasher_2_sgjfs8.png",
    productName: "dishwasher",
    description:
      "374L Bottom Freezer Inverter Linear Compressor GC-B459NLXM ; Dimension (mm, WxHxD): 595 x 1,860 x 682.",
    price: 2540,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p9",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542021/FrambegTech/TODAYS%20DEALS/iron_1_z7xlyp.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542024/FrambegTech/TODAYS%20DEALS/iron_2_sfkbba.png",
    productName: "iron",
    description:
      "Designed for photographers and videographers alike the Canon EOS 5D Mark IV features a brand new 30.4.",
    price: 3440,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p10",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542027/FrambegTech/TODAYS%20DEALS/Laptop_1_rybmwz.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542030/FrambegTech/TODAYS%20DEALS/Laptop_2_vsivik.png",
    productName: "laptop",
    description:
      "Galaxy S22 Ultra smartphone offers a 108-megapixel camera and can shoot video in 8K ultra-high-definition resolution.",
    price: 2240,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p11",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542032/FrambegTech/TODAYS%20DEALS/Laptop_3_ykyfdl.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542036/FrambegTech/TODAYS%20DEALS/Laptop_4_ryxe5k.png",
    productName: "laptop2",
    description:
      "Galaxy S22 Ultra smartphone offers a 108-megapixel camera and can shoot video in 8K ultra-high-definition resolution.",
    price: 2340,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p12",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542038/FrambegTech/TODAYS%20DEALS/refrigerator_1_ppc3ge.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542041/FrambegTech/TODAYS%20DEALS/refrigerator_2_zwwn9h.png",
    productName: "refrigerator",
    description:
      "Explore 2020 HD T5300 Smart TV with One Remote Function and HDR. Enjoy Full HD resolution with Smart TV powered by TIZEN.",
    price: 2480,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p13",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542044/FrambegTech/TODAYS%20DEALS/refrigerator_2_1_yfvrih.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542047/FrambegTech/TODAYS%20DEALS/refrigerator_2_2_g1lctt.png",
    productName: "refrigerator2",
    description:
      "Apple iPhone 6 ; Type, IPS LCD ; Size, 4.7 inches, 60.9 cm2 (~65.8% screen-to-body ratio) ; Resolution, 750 x 1334 pixels, 16:9 ratio (~326 ppi density).",
    price: 2480,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p13",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542051/FrambegTech/TODAYS%20DEALS/refrigerator_3_1_ugriw6.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542053/FrambegTech/TODAYS%20DEALS/refrigerator_3_2_rgfwln.png",
    productName: "refrigerator3",
    description:
      "Apple iPhone 6 ; Type, IPS LCD ; Size, 4.7 inches, 60.9 cm2 (~65.8% screen-to-body ratio) ; Resolution, 750 x 1334 pixels, 16:9 ratio (~326 ppi density).",
    price: 2480,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p13",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542056/FrambegTech/TODAYS%20DEALS/refrigerator_4_1_opyosv.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542059/FrambegTech/TODAYS%20DEALS/refrigerator_4_2_le29hm.png",
    productName: "refrigerator4",
    description:
      "Apple iPhone 6 ; Type, IPS LCD ; Size, 4.7 inches, 60.9 cm2 (~65.8% screen-to-body ratio) ; Resolution, 750 x 1334 pixels, 16:9 ratio (~326 ppi density).",
    price: 2480,
    discount: 2600,
    addToCart: "refrigerator5",
  },
  {
    id: "p13",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542063/FrambegTech/TODAYS%20DEALS/refrigerator_5_1_pff3zu.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542064/FrambegTech/TODAYS%20DEALS/refrigerator_5_2_gtaekd.png",
    productName: "refrigerator6",
    description:
      "Apple iPhone 6 ; Type, IPS LCD ; Size, 4.7 inches, 60.9 cm2 (~65.8% screen-to-body ratio) ; Resolution, 750 x 1334 pixels, 16:9 ratio (~326 ppi density).",
    price: 2480,
    discount: 2600,
    addToCart: "Add To Cart",
  },
  {
    id: "p13",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542068/FrambegTech/TODAYS%20DEALS/refrigerator_6_1_sazpp0.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542047/FrambegTech/TODAYS%20DEALS/refrigerator_2_2_g1lctt.png",
    productName: "refrigerator7",
    description:
      "Apple iPhone 6 ; Type, IPS LCD ; Size, 4.7 inches, 60.9 cm2 (~65.8% screen-to-body ratio) ; Resolution, 750 x 1334 pixels, 16:9 ratio (~326 ppi density).",
    price: 2480,
    discount: 2600,
    addToCart: "Add To Cart",
  },
];

const TodaysDeals = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [checkSearchedWord, setCheckedSearchedWord] = useState(false);

  const filteredProducts = todaysDealsData.filter((product) =>
    product.productName.toLowerCase().includes(searchedWord.toLowerCase())
  );

  return (
    <Fragment>
      <ScrollToTop />
      <NavigationBar
        onHandleCheckSearchValue={(checkSearchedWord) =>
          setCheckedSearchedWord(checkSearchedWord ? true : false)
        }
        onHandleInputInNav={(searchWord) => {
          setSearchedWord(searchWord);
        }}
      />
      <div className="m-4 font-serif mt-44 lg:m-0 lg:pt-20">
        <Header_BrandDeals />

        <div className="md:m-4 lg:w-4/5 lg:m-auto">
          <div className="border-2 py-4 md:p-4 lg:p-4 shadow-md bg-white">
            {checkSearchedWord && filteredProducts.length === 0 ? (
              <div className="mx-8">
                <h1 className="text-xl">No results for {searchedWord}</h1>
                <p>Try checking your spelling or use more general terms</p>
              </div>
            ) : (
              <TodaysDealsProducts
                todaysDealsData={
                  checkSearchedWord ? filteredProducts : todaysDealsData
                }
              />
            )}
          </div>

          <div className="m-4 md:flex lg:flex">
            <div className="p-4 bg-white border-2 md:w-2/3 md:pt-12 lg:pt-32">
              <h1 className="uppercase font-bold opacity-50 md:my-4 lg:text-3xl">
                Brand'S Deal
              </h1>
              <h1 className="font-bold text-xl mt-2 md:text-3xl lg:text-5xl">
                Save up to gh¢200 on Select Samsung washing Machine
              </h1>
              <p className="mt-2 md:text-xl">
                Tortor purus et quis aenean tempus tellus <br /> fames
              </p>

              <button className="my-4 text-xl text-blue-600 font-bold md:text-2xl md:my-5">
                Shop now
              </button>
            </div>

            <div className="md:w-2/3">
              <img
                className="md:p-2 md:mt-4 lg:p-0 lg:mt-0"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542073/FrambegTech/TODAYS%20DEALS/samsung_vuvucg.jpg"
                alt="samsungImage"
              ></img>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default TodaysDeals;
