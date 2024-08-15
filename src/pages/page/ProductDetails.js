import { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import NavigationBar from "../../components/navBar/Navigation";
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");
  const [checkSearchedWord, setCheckedSearchedWord] = useState(false);
  const { state } = useLocation();
  const payload = state && state.payload;

  const [currentImage, setCurrentImage] = useState(payload.productImage);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    payload.productImage2,
    payload.productImage,
    payload.productImage2,
    payload.productImage2,
    payload.productImage2,
    payload.productImage2,
  ];

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/products/relatedProducts/${payload.category}`
        );
        setRelatedProduct(response.data.relatedProducts);
      } catch (error) {
        console.log(error);
      }
    };

    if (payload.category) {
      fetchRelatedProducts();
    }
  }, [payload.category]);

  return (
    <Fragment>
      <NavigationBar
        onHandleCheckSearchValue={(isChecked) =>
          setCheckedSearchedWord(isChecked)
        }
        onHandleInputInNav={(searchWord) => setSearchedWord(searchWord)}
      />
      <div className="py-5 px-2 font-serif mt-[8.5rem] md:mt-[9rem] lg:mt-[11rem] lg:flex lg:py-0 lg:px-0">
        <div className="max-[767px]:flex justify-center cursor-pointer max-[767px]:mb-4 md:flex md:mb-4 gap-2 lg:ml-8 lg:absolute lg:grid">
          {images.map((image, index) => (
            <img
              key={index}
              className={`w-[3rem] h-[3rem] p-[0.17rem] border rounded-lg md:w-[5rem] md:h-[5rem] lg:h-[3.5rem] lg:w-[3.5rem] ${
                selectedImageIndex === index
                  ? "border-[0.1rem] border-blue-600"
                  : ""
              }`}
              src={image}
              onMouseEnter={() => {
                setCurrentImage(image);
                setSelectedImageIndex(index);
              }}
            />
          ))}
        </div>
        <div className="lg:w-4/5 lg:m-auto lg:flex lg:gap-24">
          <div className="max-[767px]:p-8 flex justify-center items-center bg-blue-500 md:p-8">
            <img
              className="max-[767px]:h-[10rem] max-[767px]:w-[10rem] md:h-[17rem] md:w-[17rem] lg:w-[30rem] lg:h-[15rem]"
              src={currentImage}
              alt="product"
            />
          </div>

          <div className="mt-4 grid max-[767px]:gap-4 md:gap-4 lg:mt-0">
            <h1 className="text-xl text-blue-600 font-bold md:text-3xl lg:text-xl">
              {payload.productName}
            </h1>
            <div className=" max-[767px]:text-[0.9rem] md:text-xl lg:text-[1rem]">
              <p>{payload.description}</p>
            </div>

            <span>
              <div className="m-4">
                <h5 className="mb-2 font-bold md:text-3xl lg:text-xl">
                  key features :
                </h5>
                <ul className="ml-5 md:text-xl lg:text-sm">
                  <li>Newest Technology</li>
                  <li>Best in class components</li>
                  <li>Dimensions -69.5 * 750 * 169.0</li>
                  <li>Maintenance free</li>
                  <li>12 months warranty</li>
                </ul>
              </div>

              <h1 className="text-xl m-4 font-bold md:text-2xl lg:text-lg">
                <span className="text-blue-600">Price : </span>
                {payload.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h1>
            </span>
          </div>
        </div>
      </div>

      <div className="py-5 px-2 lg:py-0 lg:px-0 lg:my-16 lg:w-4/5 lg:m-auto">
        <h1 className="mb-4 text-2xl font-bold md:text-4xl lg:text-2xl lg:my-6">
          Related Products
        </h1>
        <div className="grid grid-cols-2 gap-x-2 gap-y-8 md:grid-cols-3 lg:grid-cols-3">
          {relatedProduct.map((product) => (
            <ProductItem
              key={product._id}
              id={product._id}
              productImage={product.productImage}
              productImage2={product.productImage2}
              productName={product.productName}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProductDetails;
