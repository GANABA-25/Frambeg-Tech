import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import axios from "axios";

import NavigationBar from "../../../components/navBar/Navigation";

import Carousel from "../../components/Carousel";
import Offers from "./Offers";
import BrandDeals from "./BrandDeals";
import AvailableProducts from "./AvailableProducts";
import TopBrands from "./TopBrands";
import CustomerComments from "./CustomerComments";
import ProductItem from "../../components/ProductItem";
import loadingAnimation from "../../../lottie/Animation - loading.json";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";

const Home = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [checkSearchedWord, setCheckedSearchedWord] = useState(false);
  const [bestDealsProducts, setBestDealsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchBestDealsProducts = async (page) => {
    const category = "Home";
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

  const filteredProducts = bestDealsProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchedWord.toLowerCase())
  );
  return (
    <Fragment>
      <NavigationBar
        onHandleCheckSearchValue={(checkSearchedWord) =>
          setCheckedSearchedWord(checkSearchedWord ? true : false)
        }
        onHandleInputInNav={(searchWord) => {
          setSearchedWord(searchWord);
        }}
      />

      <section className="font-serif">
        <Carousel />

        <Offers />

        <AvailableProducts />

        <BrandDeals />

        {filteredProducts.length === 0 ? (
          <div className="flex justify-center items-center w-full">
            <Lottie
              className="w-[6rem]"
              animationData={loadingAnimation}
              loop={true}
            />
          </div>
        ) : (
          <div className="lg:w-4/5 lg:m-auto">
            <div className="lg:flex font-bold mb-8 m-4">
              <h1 className="text-2xl opacity-75">Today's best deal</h1>
              <Link
                to="/TodaysDeals"
                className="text-blue-600 text-xl hover:-translate-x-1 hover:scale-110 duration-300 lg:ml-5 lg:text-xl"
              >
                see more
              </Link>
            </div>
            <div className="grid grid-cols-2 mb-8 gap-x-2 gap-y-8 md:grid-cols-3 md:mx-4 lg:grid-cols-4">
              {filteredProducts?.map((todaysDeals) => (
                <ProductItem
                  key={todaysDeals._id}
                  id={todaysDeals._id}
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
          </div>
        )}

        <TopBrands />

        <CustomerComments />

        <Footer />
      </section>
    </Fragment>
  );
};

export default Home;
