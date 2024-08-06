import { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import NavigationBar from "../../components/navBar/Navigation";
import RelatedProductsDetails from "../components/RelatedProductsDetails";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const [relatedProduct, setRelatedProduct] = useState([]);
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
      <NavigationBar />

      <div className="font-serif mt-40 md:mt-[12rem] lg:mt-[11rem] lg:flex">
        <div className="grid gap-2 ml-8 absolute">
          {images.map((image, index) => (
            <img
              key={index}
              className={`w-[3rem] h-[3rem] border rounded-lg ${
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
          <div className="flex justify-center items-center bg-blue-500 lg:p-8">
            <img
              className="max-[767px]:h-[10rem] max-[767px]:w-[10rem] md:h-[17rem] md:w-[17rem] lg:w-[30rem] lg:h-[15rem]"
              src={currentImage}
              alt="product"
            />
          </div>

          <div className="">
            <h1 className="text-xl text-blue-600 m-4 mt-9 font-bold md:text-3xl md:mt-16 lg:text-xl lg:mt-0">
              {payload.productName}
            </h1>
            <div className="mx-4 max-[767px]:text-[0.9rem] md:text-xl lg:text-[1rem]">
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

      <div className="m-4 max-[767px]:mt-8 lg:w-4/5 lg:m-auto lg:my-12">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-2xl">
          Related Products
        </h1>
        <div className="grid grid-cols-2 mx-4 gap-x-2 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:mx-0">
          {relatedProduct.map((product) => (
            <RelatedProductsDetails
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
