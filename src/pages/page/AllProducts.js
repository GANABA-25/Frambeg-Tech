import React, { Fragment, useState, useEffect } from "react";
import Lottie from "lottie-react";
import axios from "axios";

import loadingAnimation from "../../lottie/Animation - loading.json";
import ProductItem from "../components/ProductItem";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import NavigationBar from "../../components/navBar/Navigation";
import SideBar from "../components/SideBar";
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
      <div className="flex w-full h-full font-serif lg:w-4/5 lg:m-auto">
        <div className="hidden lg:block flex-none w-[14rem] h-screen">
          <SideBar />
        </div>

        {/* Body */}
        <div className="flex-grow border-l-[0.2rem] mt-44">
          <div className="">
            <h1 className="text-6xl font-bold text-blue-600 m-24 ml-16">
              Shop
            </h1>
            {productsToDisplay.length === 0 ? (
              <div className="flex justify-center items-center w-full">
                <Lottie
                  className="w-[6rem]"
                  animationData={loadingAnimation}
                  loop={true}
                />
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 mx-4 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0 lg:ml-16">
                  {filteredProducts.map((product) => (
                    <ProductItem
                      key={product._id}
                      id={product._id}
                      productImage={product.productImage}
                      productImage2={product.productImage2}
                      productName={product.productName}
                      description={product.description}
                      price={product.price}
                      addToCart={product.addToCart}
                    />
                  ))}
                </div>

                <div className="lg:ml-16">
                  <Pagination
                    totalPages={totalPages}
                    handlePageClick={handlePageClick}
                  />
                </div>
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

// {
//   /* <div className="font-serif mt-44">
//         <div className="lg:hidden">
//           <h1 className="text-4xl m-4 my-14 lg:text-7xl font-bold text-blue-600 lg:my-24">
//             Shop
//           </h1>

//           {productsToDisplay.length === 0 ? (
//             // <Lottie animationData={loadingAnimation} loop={true} />
//             <div>Loading...</div>
//           ) : (
//             <div className="grid grid-cols-2 mx-4 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0 lg:ml-16">
//               {productsToDisplay.map((product) => (
//                 <ProductItem
//                   key={product._id}
//                   id={product._id}
//                   productImage={product.productImage}
//                   productImage2={product.productImage2}
//                   productName={product.productName}
//                   description={product.description}
//                   price={product.price}
//                   addToCart={product.addToCart}
//                 />
//               ))}
//             </div>
//           )}
//           <div>
//             <Pagination
//               totalPages={totalPages}
//               handlePageClick={handlePageClick}
//             />
//           </div>
//         </div>

//         <div className="md:m-4 lg:flex lg:w-4/5 lg:m-auto">
//           <SideBar />
//           <div>
//             <div className="hidden lg:block lg:ml-52 border-l-2">
//               <h1 className="text-6xl font-bold text-blue-600 m-24 ml-16">
//                 Shop
//               </h1>
//               {productsToDisplay.length === 0 ? (
//                 <div className="flex justify-center items-center w-12">
//                   <Lottie
//                     className=""
//                     animationData={loadingAnimation}
//                     loop={true}
//                   />
//                 </div>
//               ) : (
//                 <>
//                   <div className="grid grid-cols-2 mx-4 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0 lg:ml-16">
//                     {productsToDisplay.map((product) => (
//                       <ProductItem
//                         key={product._id}
//                         id={product._id}
//                         productImage={product.productImage}
//                         productImage2={product.productImage2}
//                         productName={product.productName}
//                         description={product.description}
//                         price={product.price}
//                         addToCart={product.addToCart}
//                       />
//                     ))}
//                   </div>

//                   <div className="lg:ml-16">
//                     <Pagination
//                       totalPages={totalPages}
//                       handlePageClick={handlePageClick}
//                     />
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div> */
// }
