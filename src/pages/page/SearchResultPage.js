import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Lottie from "lottie-react";
import loadingAnimation from "../../lottie/Animation - loading.json";
import axios from "axios";
import { setLoading } from "../../store/searchBar-slice";

import Pagination from "../components/Pagination";
import ScrollToTop from "../components/ScrollToTop";
import NavigationBar from "../../components/navBar/Navigation";
import ProductItem from "../components/ProductItem";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const SearchResultPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.search.isLoading);
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const searchedTerm = new URLSearchParams(location.search).get("searchedTerm");

  useEffect(() => {
    const fetchSearchResults = async (page) => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(
          `http://localhost:8080/products/searchedProducts/?searchedTerm=${searchedTerm}&page=${page}`
        );
        const { products, totalPages } = response.data;
        setProducts(products);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching search results", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (searchedTerm) {
      fetchSearchResults(currentPage + 1);
    }
  }, [searchedTerm, currentPage]);

  const productCount = products.length;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
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
            <h1 className="text-6xl font-bold text-blue-600">
              Results {productCount}
            </h1>
            <p className="opacity-75">
              Check each product page for other buying options.
            </p>
          </div>
          <div>
            <>
              {isLoading ? (
                <div className="flex justify-center items-center w-full">
                  <Lottie
                    className="w-[6rem]"
                    animationData={loadingAnimation}
                    loop={true}
                  />
                </div>
              ) : (
                <>
                  {!products.length ? (
                    <div className="grid max-[767px]:gap-4 text-center justify-center items-center w-full md:gap-8 md:text-xl md:my-8 lg:text-sm lg:flex lg:gap-0 lg:my-12">
                      <h1>No products match your search query :</h1>
                      <p className="font-bold text-red-600 lg:mx-2">
                        {searchedTerm}.
                      </p>
                      <h1 className="uppercase ">
                        Please use a more general term
                      </h1>
                    </div>
                  ) : (
                    <Fragment>
                      <div className="grid grid-cols-2 mx-4 gap-x-2 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0">
                        {products.map((product) => (
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
            </>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SearchResultPage;
