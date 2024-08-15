import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setResults, setLoading } from "../../store/searchBar-slice";
import { useState, useEffect } from "react";
import axios from "axios";

import { FaSearch } from "react-icons/fa";

const SearchInput = ({ onHandleInput, onCheckSearchValue }) => {
  const dispatch = useDispatch();
  const [localQuery, setLocalQuery] = useState("");
  const query = useSelector((state) => state.search.query);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        dispatch(setLoading(true));
        try {
          const response = await axios.get(
            `http://localhost:8080/products/allProducts/search?q=${query}`
          );
          dispatch(setResults(response.data));
        } catch (error) {
          console.error("Error fetching search results:", error);
        } finally {
          dispatch(setLoading(false));
        }
      }
    };

    fetchResults();
  }, [query, dispatch]);

  const handleChange = (e) => {
    setLocalQuery(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setQuery(localQuery));
  };

  return (
    <Fragment>
      <form className="relative flex justify-center items-center md:mx-2">
        <input
          className="max-[767px]:w-full text-slate-950 border-2 bg-grayDark focus:border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:rounded-sm p-[0.4rem] md:w-full lg:w-72"
          type="text"
          placeholder="search for product"
          value={localQuery}
          onChange={handleChange}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        {/* <FaSearch
          className={`absolute right-2 opacity-${
            searchWord ? "0" : "50"
          } text-black 
          }`}
        /> */}
      </form>
    </Fragment>
  );
};
export default SearchInput;

// import { Fragment, useState } from "react";

// import { FaSearch } from "react-icons/fa";

// const SearchInput = ({ onHandleInput, onCheckSearchValue }) => {
//   const [searchWord, setSearchWord] = useState("");

//   const searchInputHandler = (e) => {
//     setSearchWord(e.target.value);
//     onCheckSearchValue(e.target.value);
//   };

//   const searchHandler = (e) => {
//     e.preventDefault();
//     onHandleInput(searchWord);

//     setSearchWord("");
//   };

//   return (
//     <Fragment>
//       <form
//         onSubmit={searchHandler}
//         className="relative flex justify-center items-center md:mx-2"
//       >
//         <input
//           type="text"
//           placeholder="search for product"
//           onChange={searchInputHandler}
//           value={searchWord}
//           className="max-[767px]:w-full text-slate-950 border-2 bg-grayDark focus:border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:rounded-sm p-[0.4rem] md:w-full lg:w-72"
//         />
//         <FaSearch
//           className={`absolute right-2 opacity-${
//             searchWord ? "0" : "50"
//           } text-black
//           }`}
//         />
//       </form>
//     </Fragment>
//   );
// };
// export default SearchInput;
