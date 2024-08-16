import { Fragment, useState, useEffect } from "react";
import Lottie from "lottie-react";
import axios from "axios";

import ProductItem from "../components/ProductItem";
import ScrollToTop from "../components/ScrollToTop";
import NavigationBar from "../../components/navBar/Navigation";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Pagination from "../components/Pagination";
import loadingAnimation from "../../lottie/Animation - loading.json";

const AudioAndVideo = () => {
  const [audioAndVideoProducts, setAudioAndVideoProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchVideoAndAudioProducts = async (page) => {
    const category = "Audio&Video";
    try {
      const response = await axios.get(
        `http://localhost:8080/products/Audio&VideoProducts/${category}?page=${page}`
      );

      const { products, totalPages } = response.data;
      setAudioAndVideoProducts(products);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Failed to Fetch Products:", error);
    }
  };

  useEffect(() => {
    fetchVideoAndAudioProducts(currentPage + 1);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <Fragment>
      <ScrollToTop />
      <NavigationBar />
      <div className="max-[767px]:pt-[10rem] md:pt-[8rem] h-full font-serif lg:w-4/5 lg:m-auto">
        <div className="max-[767px]:mb-4 grid gap-6 md:my-24 md:gap-6 mx-4 lg:mx-0">
          <h1 className="max-[767px]:text-4xl font-bold text-blue-600 lg:text-6xl">
            Audio & Video
          </h1>
          <p className="opacity-75">
            Explore a top-notch collection of audio and video products designed
            to enhance your entertainment experience. From cutting-edge speakers
            and headphones to high-definition TVs and streaming devices, find
            everything you need to elevate your home entertainment setup. Browse
            through a wide range of high-quality brands and products tailored
            for superior sound and visuals. Enjoy a seamless shopping experience
            for all your audio and video needs.
          </p>
        </div>
        <div>
          {audioAndVideoProducts.length === 0 ? (
            <div className="flex justify-center items-center w-full">
              <Lottie
                className="w-[6rem]"
                animationData={loadingAnimation}
                loop={true}
              />
            </div>
          ) : (
            <>
              <Fragment>
                <div className="grid grid-cols-2 mx-4 gap-x-2 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0">
                  {audioAndVideoProducts.map((product) => (
                    <ProductItem
                      key={product._id}
                      productId={product._id}
                      productImage={product.productImage}
                      productImage2={product.productImage2}
                      productName={product.productName}
                      description={product.description}
                      price={product.price}
                      category={product.category}
                    />
                  ))}
                </div>

                <Pagination
                  totalPages={totalPages}
                  handlePageClick={handlePageClick}
                />
              </Fragment>
            </>
          )}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default AudioAndVideo;
