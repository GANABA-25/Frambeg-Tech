import { Fragment, useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../lottie/Animation - loading.json";
import axios from "axios";

import ProductItem from "../components/ProductItem";
import NavigationBar from "../../components/navBar/Navigation";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";

const HomeAppliances = () => {
  const [homeApplianceProducts, setHomeApplianceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const category = "Home Appliances";
  const fetchHomeApplianceProducts = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/products/homeApplianceProducts/${category}?page=${page}`
      );

      const { products, totalPages } = response.data;
      setHomeApplianceData(products);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchHomeApplianceProducts(currentPage + 1);
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
            Home Appliances
          </h1>
          <p className="opacity-75">
            Discover the best collection of products specifically focused on
            home appliances. Find a comprehensive selection of kitchen
            appliances, home electronics, and other household essentials.
            Whether you're upgrading your kitchen or shopping for everyday
            household items, you'll find everything you need right here. Enjoy
            browsing top-quality brands and products designed to make your home
            more comfortable and efficient.
          </p>
        </div>
        <div>
          {homeApplianceProducts.length === 0 ? (
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
                  {homeApplianceProducts.map((product) => (
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

export default HomeAppliances;
