import { VscSearch } from "react-icons/vsc";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";

const SearchInput = ({ onHandleInput, onCheckSearchValue }) => {
  const [searchWord, setSearchWord] = useState();

  const searchInputHandler = (e) => {
    setSearchWord(e.target.value);
    onCheckSearchValue(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    onHandleInput(searchWord);

    setSearchWord("");
  };

  return (
    <Fragment>
      <motion.form
        initial={{ opacity: 0, x: 75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, type: "spring" }}
        onSubmit={searchHandler}
        className="flex justify-center items-center md:mx-2"
      >
        <input
          type="text"
          placeholder="search for product"
          onChange={searchInputHandler}
          value={searchWord}
          className="text-slate-950 border-4 bg-grayDark focus:border-0 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:rounded-sm p-2 w-72 md:w-full lg:w-72"
        ></input>
        <button className="font-bold bg-slate-950 text-white p-4 px-7 mx-2 transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 duration-300 shadow-md shadow-gray-700">
          <VscSearch />
        </button>
      </motion.form>
    </Fragment>
  );
};
export default SearchInput;
