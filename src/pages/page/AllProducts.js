import React, { Fragment, useState, useEffect } from "react";
import Lottie from "lottie-react";
import axios from "axios";

import loadingAnimation from "../../lottie/Animation - loading.json";
import ProductItem from "../components/ProductItem";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import NavigationBar from "../../components/navBar/Navigation";
import Pagination from "../components/Pagination";

const AllProducts = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [checkSearchedWord, setCheckedSearchedWord] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/products/allProducts?page=${page}`
      );
      const { products, totalPages } = response.data;
      setAllProducts(products);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage + 1);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const filteredProducts = allProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchedWord.toLowerCase())
  );

  const productsToDisplay = checkSearchedWord ? filteredProducts : allProducts;

  return (
    <Fragment>
      <ScrollToTop />
      <NavigationBar
        onHandleCheckSearchValue={(isChecked) =>
          setCheckedSearchedWord(isChecked)
        }
        onHandleInputInNav={(searchWord) => setSearchedWord(searchWord)}
      />
      <div className="max-[767px]:pt-[10rem] md:pt-[8rem] h-full font-serif lg:w-4/5 lg:m-auto">
        <div className="max-[767px]:mb-4 grid gap-6 md:my-24 md:gap-6 mx-4 lg:mx-0">
          <h1 className="text-6xl font-bold text-blue-600">Shop</h1>
          <p className="opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            turpis velit, iaculis vel risus non, convallis rhoncus ligula.
            Vestibulum ut lorem posuere, malesuada neque et, placerat quam. In
            hac habitasse platea dictumst. Sed bibendum porttitor sem, at
            sollicitudin orci placerat nec.
          </p>
        </div>
        <div>
          {productsToDisplay.length === 0 ? (
            <div className="flex justify-center items-center w-full">
              <h1>No Products matches {searchedWord}</h1>
            </div>
          ) : (
            <>
              {allProducts.length === 0 ? (
                <div className="flex justify-center items-center w-full">
                  <Lottie
                    className="w-[6rem]"
                    animationData={loadingAnimation}
                    loop={true}
                  />
                </div>
              ) : (
                <Fragment>
                  <div className="grid grid-cols-2 mx-4 gap-x-2 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0">
                    {productsToDisplay.map((product) => (
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

export default AllProducts;
