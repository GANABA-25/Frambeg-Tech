import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 4, type: "spring" }}
        className="max-[767px]:mt-[9rem] md:mt-[9rem] lg:mt-[9.6rem] overflow-hidden"
      >
        <Slider {...settings}>
          <div className="px-0 mx-0 overflow-hidden">
            <img
              className="w-full max-[767px]:h-85 md:h-50 object-cover lg:h-85"
              src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541577/FrambegTech/HOME%20PAGE/backGroundImage_1_vuski8.jpg"
              alt="backGroundImage (1)"
            />
          </div>
          <div className="px-0 mx-0 overflow-hidden">
            <img
              className="w-full max-[767px]:h-85 md:h-50 object-cover lg:h-85"
              src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541581/FrambegTech/HOME%20PAGE/backGroundImage_ebxorr.jpg"
              alt="backGroundImage"
            />
          </div>
          <div className="px-0 mx-0 overflow-hidden">
            <img
              className="w-full max-[767px]:h-85 md:h-50 object-cover lg:h-85"
              src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541580/FrambegTech/HOME%20PAGE/backGroundImage_3_epucho.jpg"
              alt="backGroundImage (3)"
            />
          </div>
        </Slider>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 4, type: "spring" }}
        className="font-serif bg-white absolute top-52 left-5 p-3 py-8 md:top-72 md:left-96 md:w-6/12 lg:top-72 lg:left-60 lg:w-3/12 lg:p-4"
      >
        <div className="flex">
          <img
            className="w-8"
            src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
            alt="logo"
          ></img>
          <h6 className="m-2 font-bold md:text-xl">Frambeg Tech</h6>
        </div>

        <h1 className="text-2xl  font-bold m-2 md:leading-10 md:tracking-wider md:text-4xl lg:text-4xl lg:leading-15  lg:tracking-wider">
          The best home <br /> entertainment <br /> system is{" "}
          <br className="hidden" />
          here
        </h1>
        <p className="m-2 mt-7">
          Sit diam odio eget rhoncus volutpat est nibh <br /> velt posuere
          egestas.
        </p>
        <motion.span
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 4, delay: 1, type: "spring" }}
        >
          <Link
            to="/AllProducts"
            className="text-blue-600 font-bold m-2 hover:-translate-x-1 hover:scale-110 duration-300 shadow-sm"
          >
            Shop now
          </Link>
        </motion.span>
      </motion.div>
    </Fragment>
  );
};

export default Carousel;

{
}
