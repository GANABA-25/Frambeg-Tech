import { Fragment } from "react";
import { useState, useEffect } from "react";

import Lottie from "lottie-react";
import loadingAnimation from "../../../lottie/Animation - loading.json";

import NavigationBar from "../../../components/navBar/Navigation";
import HeaderBrandDeal from "./HeaderBrandDeal";
import ScrollToTop from "../../components/ScrollToTop";
import ProductItem from "../../components/ProductItem";
import axios from "axios";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";

const NewArrival = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [checkSearchedWord, setCheckedSearchedWord] = useState(false);
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchNewArrivalProducts = async (page) => {
    const category = "New Arrival";
    try {
      const response = await axios.get(
        `http://localhost:8080/products/homeApplianceProducts/${category}?page=${page}`
      );
      const { products, totalPages } = response.data;
      setNewArrivalProducts(products);
      setTotalPages(totalPages);
    } catch (error) {
      console.log("ERROR FETCHING PRODUCTS", error);
    }
  };

  useEffect(() => {
    fetchNewArrivalProducts(currentPage + 1);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const filteredProducts = newArrivalProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchedWord.toLowerCase())
  );

  const productsToDisplay = checkSearchedWord
    ? filteredProducts
    : newArrivalProducts;

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
            {newArrivalProducts.length === 0 ? (
              <div className="flex justify-center items-center w-full">
                <Lottie
                  className="w-[6rem]"
                  animationData={loadingAnimation}
                  loop={true}
                />
              </div>
            ) : (
              <div>
                {!productsToDisplay.length ? (
                  <div className="flex justify-center items-center w-full lg:my-12">
                    <h1>
                      No products match your search query :
                      <span className="font-bold text-red-600 lg:mx-2">
                        {searchedWord}.
                      </span>
                    </h1>
                    <h1 to="/AllProducts" className="uppercase ">
                      Please use a more general term
                    </h1>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0">
                      {filteredProducts?.map((NewArrival) => (
                        <ProductItem
                          key={NewArrival._id}
                          productId={NewArrival._id}
                          productImage={NewArrival.productImage}
                          productImage2={NewArrival.productImage2}
                          productName={NewArrival.productName}
                          description={NewArrival.description}
                          price={NewArrival.price}
                          category={NewArrival.category}
                        />
                      ))}
                    </div>
                    <div>
                      <Pagination
                        totalPages={totalPages}
                        handlePageClick={handlePageClick}
                      />
                    </div>
                  </>
                )}
              </div>
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
