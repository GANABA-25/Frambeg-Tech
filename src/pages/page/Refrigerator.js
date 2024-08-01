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
            Refrigerator
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
              {filteredProducts?.map((Refrigerator) => (
                <ProductItem
                  key={Refrigerator._id}
                  id={Refrigerator._id}
                  productImage={Refrigerator.productImage}
                  productImage2={Refrigerator.productImage2}
                  productName={Refrigerator.productName}
                  description={Refrigerator.description}
                  price={Refrigerator.price}
                  addToCart={Refrigerator.addToCart}
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

        <div className="md:m-4 lg:w-4/5 lg:m-auto">
          <div className="hidden lg:my-24 lg:grid lg:gap-6">
            <h1 className="text-6xl font-bold text-blue-600 ">Refrigerator</h1>
            <p>
              Explore our diverse collection of refrigerators designed to meet
              all your cooling needs. From sleek, modern designs to
              energy-efficient models, find the perfect refrigerator to fit your
              kitchen and lifestyle. Browse through a variety of sizes and
              features, including smart technology and advanced cooling systems.
              Enjoy shopping for top-quality brands and products that ensure
              your food stays fresh and organized.
            </p>
          </div>
          <div className="hidden lg:block ">
            {filteredProducts.length === 0 ? (
              <div className="flex justify-center items-center w-full">
                <Lottie
                  className="w-[6rem]"
                  animationData={loadingAnimation}
                  loop={true}
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 mx-4 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0">
                {filteredProducts?.map((Refrigerator) => (
                  <ProductItem
                    key={Refrigerator._id}
                    id={Refrigerator._id}
                    productImage={Refrigerator.productImage}
                    productImage2={Refrigerator.productImage2}
                    productName={Refrigerator.productName}
                    description={Refrigerator.description}
                    price={Refrigerator.price}
                    addToCart={Refrigerator.addToCart}
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

export default Refrigerator;
