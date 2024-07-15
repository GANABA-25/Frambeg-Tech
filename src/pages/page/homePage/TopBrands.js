import { Fragment } from "react";

const TopBrands = () => {
  return (
    <Fragment>
      <div className="py-8 pb-20 lg:w-4/5 lg:m-auto m-4">
        <h1 className="text-2xl font-bold mb-4">Top brands</h1>
        <div className="grid grid-cols-2 md:grid-cols-6">
          <img
            className="border-2 p-6 md:p-6 lg:p-5"
            src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541603/FrambegTech/HOME%20PAGE/tcl_uvzcor.png"
            alt="tclImage"
          />
          <img
            className="border-2 p-8 md:p-7 lg:p-7"
            src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541602/FrambegTech/HOME%20PAGE/sony_srac5z.png"
            alt="sonyImage"
          />
          <img
            className="border-2 p-6 md:p-7 lg:p-7"
            src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541581/FrambegTech/HOME%20PAGE/brother_izfpd6.png"
            alt="brotherImage"
          />
          <img
            className="border-2 p-6 md:p-7 lg:p-7"
            src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541586/FrambegTech/HOME%20PAGE/hisense_rwp53q.png"
            alt="hisenseImage"
          />
          <img
            className="border-2 p-6 md:p-7 lg:p-7"
            src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541593/FrambegTech/HOME%20PAGE/panasonic_xoedkr.png"
            alt="panasonicImage"
          />
          <img
            className="border-2 p-4 md:p-6 lg:p-5"
            src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541598/FrambegTech/HOME%20PAGE/samsung_txsaim.png"
            alt="samsungImage"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TopBrands;
