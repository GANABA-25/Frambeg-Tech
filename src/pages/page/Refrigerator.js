import { Fragment, useState, useEffect } from "react";
import Lottie from "lottie-react";
import axios from "axios";

import loadingAnimation from "../../lottie/Animation - loading.json";
import ScrollToTop from "../components/ScrollToTop";
import ProductItem from "../components/ProductItem";
import NavigationBar from "../../components/navBar/Navigation";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const Refrigerator = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [checkSearchedWord, setCheckedSearchedWord] = useState(false);
  const [refrigeratorProducts, setRefrigeratorProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchRefrigeratorProducts = async (page) => {
    const category = "Refrigerator";
    try {
      const response = await axios.get(
        `http://localhost:8080/products/RefrigeratorProducts/${category}?page=${page}`
      );
      const { products, totalPages } = response.data;
      setRefrigeratorProducts(products);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchRefrigeratorProducts(currentPage + 1);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const filteredProducts = refrigeratorProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchedWord.toLowerCase())
  );

  const productsToDisplay = checkSearchedWord
    ? filteredProducts
    : refrigeratorProducts;

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
      <div className="max-[767px]:pt-[10rem] md:pt-[8rem] h-full font-serif lg:w-4/5 lg:m-auto">
        <div className="max-[767px]:mb-4 grid gap-6 md:my-24 md:gap-6 mx-4 lg:mx-0">
          <h1 className="max-[767px]:text-4xl font-bold text-blue-600 lg:text-6xl">
            Refrigerator
          </h1>
          <p className="opacity-75">
            Explore our diverse collection of refrigerators designed to meet all
            your cooling needs. From sleek, modern designs to energy-efficient
            models, find the perfect refrigerator to fit your kitchen and
            lifestyle. Browse through a variety of sizes and features, including
            smart technology and advanced cooling systems. Enjoy shopping for
            top-quality brands and products that ensure your food stays fresh
            and organized.
          </p>
        </div>
        <div>
          {refrigeratorProducts.length === 0 ? (
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
                <div className="grid max-[767px]:gap-4 text-center justify-center items-center w-full md:gap-8 md:text-xl md:my-8 lg:text-sm lg:flex lg:gap-0 lg:my-12">
                  <h1>No products match your search query :</h1>
                  <p className="font-bold text-red-600 lg:mx-2">
                    {searchedWord}.
                  </p>
                  <h1 className="uppercase ">Please use a more general term</h1>
                </div>
              ) : (
                <Fragment>
                  <div className="grid grid-cols-2 mx-4 gap-x-2 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0">
                    {filteredProducts.map((product) => (
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
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Refrigerator;
