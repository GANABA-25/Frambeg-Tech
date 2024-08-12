import { Fragment, useState, useEffect } from "react";
import Lottie from "lottie-react";
import axios from "axios";

import ProductItem from "../../components/ProductItem";
import ScrollToTop from "../../components/ScrollToTop";
import NavigationBar from "../../../components/navBar/Navigation";
import HeaderBrandDeals from "./HeaderBrandDeals";
import loadingAnimation from "../../../lottie/Animation - loading.json";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";

const TodaysDeals = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [checkSearchedWord, setCheckedSearchedWord] = useState(false);
  const [bestDealsProducts, setBestDealsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchBestDealsProducts = async (page) => {
    const category = "Best-Deals";
    try {
      const response = await axios.get(
        ` http://localhost:8080/products/BestDealsProducts/${category}?page=${page}`
      );

      const { products, totalPages } = response.data;
      setBestDealsData(products);
      setTotalPages(totalPages);
    } catch (error) {
      console.log("Error Fetching Products", error);
    }
  };

  useEffect(() => {
    fetchBestDealsProducts(currentPage + 1);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const filteredProducts = bestDealsProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchedWord.toLowerCase())
  );

  const productsToDisplay = checkSearchedWord
    ? filteredProducts
    : bestDealsProducts;

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
        <HeaderBrandDeals />

        <div className="md:m-4 lg:w-4/5 lg:m-auto">
          <div className="border-2 py-4 md:p-4 lg:p-4 shadow-md bg-white">
            {bestDealsProducts.length === 0 ? (
              <div className="flex justify-center items-center w-full">
                <Lottie
                  className="w-[6rem]"
                  animationData={loadingAnimation}
                  loop={true}
                />
              </div>
            ) : (
              <>
                {!productsToDisplay.length ? (
                  <div className="flex justify-center items-center w-full lg:my-12">
                    <h1>
                      " No products match your search query:
                      <span className="font-bold text-red-600 lg:mx-2">
                        {searchedWord}.
                      </span>
                      "
                    </h1>
                    <h1 to="/AllProducts" className="uppercase lg:mx-1">
                      Please use a more general term
                    </h1>
                  </div>
                ) : (
                  <Fragment>
                    <div className="grid grid-cols-2 mx-4 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0">
                      {filteredProducts?.map((todaysDeals) => (
                        <ProductItem
                          key={todaysDeals._id}
                          productId={todaysDeals._id}
                          productImage={todaysDeals.productImage}
                          productImage2={todaysDeals.productImage2}
                          productName={todaysDeals.productName}
                          description={todaysDeals.description}
                          price={todaysDeals.price}
                          discount={todaysDeals.discount}
                          category={todaysDeals.category}
                        />
                      ))}
                    </div>
                    <div>
                      <Pagination
                        totalPages={totalPages}
                        handlePageClick={handlePageClick}
                      />
                    </div>
                  </Fragment>
                )}
              </>
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
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default TodaysDeals;
