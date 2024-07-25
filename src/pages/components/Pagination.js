import React from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Pagination = ({ totalPages, handlePageClick }) => {
  return (
    <div>
      <ReactPaginate
        previousLabel={<IoIosArrowRoundBack className="text-4xl" />}
        nextLabel={<IoIosArrowRoundForward className="text-4xl" />}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"flex items-center text-blue-600 my-12"}
        subContainerClassName={"pages pagination"}
        pageClassName={
          "border-2 p-1 px-5 hover:bg-blue-600 hover:text-white cursor-pointer"
        }
        activeClassName={"text-white bg-blue-600"}
      />
    </div>
  );
};

export default Pagination;
