import { Link } from "react-router-dom";
const ImageWithText = (props) => {
  return (
    <div className="relative mb-4 shadow-md">
      <img
        src={props.image}
        alt="Description of the image"
        className="w-full h-28 md:h-32 lg:h-48 lg:w-full"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
        <div className="relative text-center pt-3">
          <h1 className="text-xs text-white font-bold lg:pt-7">
            {props.extraText}
          </h1>
          <p className="text-white text-2xl font-bold m-2 md:text-xl lg:text-4xl">
            {props.label}
          </p>
          <Link
            to="/AllProducts"
            className="mx-2 bg-slate-950 text-white p-2 rounded-md text-xb hover:bg-blue-600 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg md:text-xl lg:text-sm"
          >
            {props.text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
