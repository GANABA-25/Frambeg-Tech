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
  const [searchedWord, setSearchedWord] = useState("");
  const [checkSearchedWord, setCheckedSearchedWord] = useState(false);
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

  const filteredProducts = audioAndVideoProducts.filter((product) =>
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
      <div className="font-serif mt-44 lg:mt-0 lg:pt-[8rem]">
        <div className="lg:hidden">
          <h1 className="text-4xl m-4 mt-36 mb-10 lg:text-7xl font-bold text-blue-600 lg:my-24 ">
            Audio & Video
          </h1>

          <p className="m-4 opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            turpis velit, iaculis vel risus non, convallis rhoncus ligula.
            Vestibulum ut lorem posuere, malesuada neque et, placerat quam. In
            hac habitasse platea dictumst. Sed bibendum porttitor sem, at
            sollicitudin orci placerat nec.
          </p>

          {filteredProducts.length === 0 ? (
            <div className="flex justify-center items-center w-full">
              <Lottie
                className="w-[6rem]"
                animationData={loadingAnimation}
                loop={true}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 mx-4 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0 lg:ml-16">
              {filteredProducts?.map((AudioAndVideo) => (
                <ProductItem
                  key={AudioAndVideo._id}
                  id={AudioAndVideo._id}
                  productImage={AudioAndVideo.productImage}
                  productImage2={AudioAndVideo.productImage2}
                  productName={AudioAndVideo.productName}
                  description={AudioAndVideo.description}
                  price={AudioAndVideo.price}
                  category={AudioAndVideo.category}
                />
              ))}

              <div className="lg:ml-16">
                <Pagination
                  totalPages={totalPages}
                  handlePageClick={handlePageClick}
                />
              </div>
            </div>
          )}
        </div>

        <div className="md:m-4 lg:w-4/5 lg:m-auto">
          <div className="hidden lg:my-24 lg:grid lg:gap-6">
            <h1 className="text-6xl font-bold text-blue-600 ">Audio & Video</h1>
            <p>
              Explore a top-notch collection of audio and video products
              designed to enhance your entertainment experience. From
              cutting-edge speakers and headphones to high-definition TVs and
              streaming devices, find everything you need to elevate your home
              entertainment setup. Browse through a wide range of high-quality
              brands and products tailored for superior sound and visuals. Enjoy
              a seamless shopping experience for all your audio and video needs.
            </p>
          </div>

          <div className="hidden lg:block">
            {filteredProducts.length === 0 ? (
              <div className="flex justify-center items-center w-full">
                <Lottie
                  className="w-[6rem]"
                  animationData={loadingAnimation}
                  loop={true}
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 mx-4 gap-x-2 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0">
                {filteredProducts?.map((AudioAndVideo) => (
                  <ProductItem
                    key={AudioAndVideo._id}
                    id={AudioAndVideo._id}
                    productImage={AudioAndVideo.productImage}
                    productImage2={AudioAndVideo.productImage2}
                    productName={AudioAndVideo.productName}
                    description={AudioAndVideo.description}
                    price={AudioAndVideo.price}
                    category={AudioAndVideo.category}
                  />
                ))}
                <div>
                  <Pagination
                    totalPages={totalPages}
                    handlePageClick={handlePageClick}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default AudioAndVideo;
