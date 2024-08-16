import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchInput.css";

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const searchInputHandler = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/SearchResultPage?searchedTerm=${searchTerm}`);
      setOverlayVisible(false);
    }
  };

  const handleFocus = () => {
    setOverlayVisible(true);
  };

  const handleBlur = () => {
    setOverlayVisible(false);
  };

  return (
    <Fragment>
      <div className={`overlay ${isOverlayVisible ? "visible" : ""}`} />

      <div className="search-input-container">
        <form
          onSubmit={searchInputHandler}
          className="relative flex justify-center items-center md:mx-2"
        >
          <input
            type="text"
            placeholder="search for product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="max-[767px]:w-full text-slate-950 border-2 bg-grayDark focus:border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:rounded-sm p-[0.4rem] md:w-full lg:w-72"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default SearchInput;
