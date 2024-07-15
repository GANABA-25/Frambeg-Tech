import { Fragment } from "react";
import { useState } from "react";
import NewArrivalProducts from "./NewArrivalProducts";
import Footer from "../../components/Footer";

import NavigationBar from "../../../components/navBar/Navigation";
import HeaderBrandDeal from "./HeaderBrandDeal";
import ScrollToTop from "../../components/ScrollToTop";

const NewArrivalData = [
  {
    id: "a1",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541711/FrambegTech/NEW%20ARRIVALS/trimmer_1_wbcpu8.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541713/FrambegTech/NEW%20ARRIVALS/trimmer_2_acf7ms.png",
    productName: "MicroWave1",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 2200,
    addToCart: "Add To Cart",
  },
  {
    id: "a2",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541673/FrambegTech/NEW%20ARRIVALS/smartSpeaker_1_khg7dh.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541676/FrambegTech/NEW%20ARRIVALS/smartSpeaker_2_bkvtth.png",
    productName: "MicroWave2",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 1240,
    addToCart: "Add To Cart",
  },
  {
    id: "a3",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541677/FrambegTech/NEW%20ARRIVALS/smartSpeaker_2_1_rztj8k.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541679/FrambegTech/NEW%20ARRIVALS/smartSpeaker_2_2_sobxbb.png",
    productName: "MicroWave3",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 1090,
    addToCart: "Add To Cart",
  },
  {
    id: "a4",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541680/FrambegTech/NEW%20ARRIVALS/smartWatch_1_zknxag.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541682/FrambegTech/NEW%20ARRIVALS/smartWatch_2_ydamnm.png",
    productName: "MicroWave4",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 940,
    addToCart: "Add To Cart",
  },
  {
    id: "a5",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541683/FrambegTech/NEW%20ARRIVALS/smartWatch_2_1_smvdk1.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541685/FrambegTech/NEW%20ARRIVALS/smartWatch_2_2_dwneac.png",
    productName: "MicroWave5",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 940,
    addToCart: "Add To Cart",
  },
  {
    id: "a6",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541687/FrambegTech/NEW%20ARRIVALS/smartwatch_3_1_oigj1l.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541688/FrambegTech/NEW%20ARRIVALS/smartwatch_3_2_mknktf.png",
    productName: "MicroWave6",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 990,
    addToCart: "Add To Cart",
  },
  {
    id: "a7",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541641/FrambegTech/NEW%20ARRIVALS/camera_1_cipntc.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541642/FrambegTech/NEW%20ARRIVALS/camera_2_uwnsdz.png",
    productName: "MicroWave7",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 2240,
    addToCart: "Add To Cart",
  },
  {
    id: "a8",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541644/FrambegTech/NEW%20ARRIVALS/camera_2_1_no0ugf.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541645/FrambegTech/NEW%20ARRIVALS/camera_2_2_t4uamw.png",
    productName: "MicroWave8",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 2250,
    addToCart: "Add To Cart",
  },
  {
    id: "a9",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541691/FrambegTech/NEW%20ARRIVALS/tablets_1_ce8aug.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541691/FrambegTech/NEW%20ARRIVALS/tablets_2_g8gnda.png",
    productName: "MicroWave9",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 2190,
    addToCart: "Add To Cart",
  },
  {
    id: "a10",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541694/FrambegTech/NEW%20ARRIVALS/tablets_2_1_jni2vu.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541698/FrambegTech/NEW%20ARRIVALS/tablets_2_2_plekkd.png",
    productName: "MicroWave10",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 2170,
    addToCart: "Add To Cart",
  },
  {
    id: "a11",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541697/FrambegTech/NEW%20ARRIVALS/telePhone_1_ktjed4.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541699/FrambegTech/NEW%20ARRIVALS/telePhone_2_ne9wtq.png",
    productName: "MicroWave11",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 3170,
    addToCart: "Add To Cart",
  },
  {
    id: "a12",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541694/FrambegTech/NEW%20ARRIVALS/tablets_2_1_jni2vu.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541698/FrambegTech/NEW%20ARRIVALS/tablets_2_2_plekkd.png",
    productName: "MicroWave12",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 2170,
    addToCart: "Add To Cart",
  },
  {
    id: "a13",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541704/FrambegTech/NEW%20ARRIVALS/telePhone_3_1_mcipyd.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541707/FrambegTech/NEW%20ARRIVALS/telePhone_3_2_uldai7.png",
    productName: "MicroWave13",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 3170,
    addToCart: "Add To Cart",
  },
  {
    id: "a14",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541708/FrambegTech/NEW%20ARRIVALS/telePhone_4_1_eiktv3.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541709/FrambegTech/NEW%20ARRIVALS/telePhone_4_2_bhk7wi.png",
    productName: "MicroWave14",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 2170,
    addToCart: "Add To Cart",
  },
  {
    id: "a15",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541655/FrambegTech/NEW%20ARRIVALS/laptop_1_1_zubemh.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541655/FrambegTech/NEW%20ARRIVALS/laptop_1_2_z2ugzw.png",
    productName: "MicroWave15",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 3970,
    addToCart: "Add To Cart",
  },
  {
    id: "a16",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541657/FrambegTech/NEW%20ARRIVALS/laptop_2_1_lbdl3e.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541659/FrambegTech/NEW%20ARRIVALS/laptop_2_2_bevedu.png",
    productName: "MicroWave16",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 3170,
    addToCart: "Add To Cart",
  },
  {
    id: "a17",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541660/FrambegTech/NEW%20ARRIVALS/laptop_4_1_wsk2ak.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541662/FrambegTech/NEW%20ARRIVALS/laptop_4_2_sviidm.png",
    productName: "MicroWave17",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 3570,
    addToCart: "Add To Cart",
  },
  {
    id: "a18",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541663/FrambegTech/NEW%20ARRIVALS/laptop_5_1_bn9bxf.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541664/FrambegTech/NEW%20ARRIVALS/laptop_5_2_bwo3ah.png",
    productName: "MicroWave18",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 3370,
    addToCart: "Add To Cart",
  },
  {
    id: "a19",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541646/FrambegTech/NEW%20ARRIVALS/desktop_1_fp6toa.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541647/FrambegTech/NEW%20ARRIVALS/desktop_2_btumji.png",
    productName: "MicroWave19",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 5570,
    addToCart: "Add To Cart",
  },
  {
    id: "a20",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541649/FrambegTech/NEW%20ARRIVALS/desktop_1_1_psplqp.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541650/FrambegTech/NEW%20ARRIVALS/desktop_1_2_cvvtcx.png",
    productName: "MicroWave20",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 5370,
    addToCart: "Add To Cart",
  },

  {
    id: "a21",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541666/FrambegTech/NEW%20ARRIVALS/microWave_1_dpygts.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541668/FrambegTech/NEW%20ARRIVALS/microWave_2_q2xagm.png",
    productName: "MicroWave21",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 1720,
    addToCart: "Add To Cart",
  },
  {
    id: "a22",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541714/FrambegTech/NEW%20ARRIVALS/washingMachine_1_jyfbij.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541716/FrambegTech/NEW%20ARRIVALS/washingMachine_2_fybmem.png",
    productName: "MicroWave22",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 1740,
    addToCart: "Add To Cart",
  },
  {
    id: "a23",
    productImage:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541718/FrambegTech/NEW%20ARRIVALS/washingMachine_1_1_g9nv9q.png",
    productImage2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541720/FrambegTech/NEW%20ARRIVALS/washingMachine_1_2_zdpv4j.png",
    productName: "MicroWave23",
    description:
      "SAMSUNG MS405MADXBB 40L ELECTRONIC SOLO MICROWAVE OVEN WITH AUTO COOKMICROWAVE",
    price: 3170,
    addToCart: "Add To Cart",
  },
];

const NewArrival = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [checkSearchedWord, setCheckedSearchedWord] = useState(false);

  const filteredProducts = NewArrivalData.filter((product) =>
    product.productName.toLowerCase().includes(searchedWord.toLowerCase())
  );

  // const productNameOnly = NewArrivalData.map((name) => name.productName);

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
        <HeaderBrandDeal />

        <div className="md:m-4 lg:w-4/5 lg:m-auto">
          <div className="border-2 py-4 md:p-4 lg:p-4 shadow-md bg-white">
            {checkSearchedWord && filteredProducts.length === 0 ? (
              <div className="mx-8 lg:ml-16">
                <h1 className="text-xl">No results for {searchedWord}</h1>
                <p>Try checking your spelling or use more general terms</p>
              </div>
            ) : (
              <NewArrivalProducts
                NewArrivalData={
                  checkSearchedWord ? filteredProducts : NewArrivalData
                }
              />
            )}
          </div>
          <div className="flex justify-between gap-3 bg-sky-500 p-4 my-10 text-white">
            <div>
              <h1 className="text-xb font-bold my-2 uppercase md:text-xl lg:text-3xl">
                Create. Play.
              </h1>
              <p className="text-xb md:text-xl">Adipiscing ultricies arey id</p>
            </div>
            <div className="mt-3 md:mt-6">
              <button className="text-xs border-2 p-1 rounded-sm md:text-xl">
                Order now
              </button>
            </div>
            <div className="flex mt-2">
              <img
                className="w-10 h-10 md:w-20 md:h-20"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711549638/FrambegTech/NEW%20ARRIVALS/Laptop_1_grb0al.png"
                alt="laptopImage"
              />
              <img
                className="w-10 h-10 md:w-20 md:h-20"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711549643/FrambegTech/NEW%20ARRIVALS/Laptop_5_ss489t.png"
                alt="laptopImage2"
              />
            </div>
            <div>
              <img
                className="w-5 h-5 md:w-10 md:h-10"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541651/FrambegTech/NEW%20ARRIVALS/intel_1_rfo5hu.png"
                alt="intelStickerImage2"
              />
              <img
                className="w-5 h-5 md:w-10 md:h-10"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541652/FrambegTech/NEW%20ARRIVALS/intel_2_psifxo.png"
                alt="intelStickerImage"
              />
            </div>
          </div>
        </div>
        <div className="mt-14">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default NewArrival;
