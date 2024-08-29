import React, { Fragment, useState, useEffect } from "react";
import Lottie from "lottie-react";
import axios from "axios";

import loadingAnimation from "../../lottie/Animation - loading.json";
import ProductItem from "../components/ProductItem";
import ScrollToTop from "../components/ScrollToTop";
import Pagination from "../components/Pagination";

import NavigationBar from "../../components/navBar/Navigation";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const AllProducts = () => {
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
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <ScrollToTop />
      <NavigationBar />
      <div className="lg:flex">
        <div className="flex-none w-[16rem] border-r-2">
          <SideBar />
        </div>

        <div className="max-[767px]:pt-[10rem] md:pt-[8rem] h-full font-serif lg:w-[74.5%] lg:px-[2rem]">
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
            {allProducts.length === 0 ? (
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
                    {allProducts.map((product) => (
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
      </div>
      <Footer />
    </Fragment>
  );
};

export default AllProducts;
