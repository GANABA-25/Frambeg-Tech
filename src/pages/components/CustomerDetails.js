import { Fragment } from "react";
const CustomerDetails = (props) => {
  return (
    <Fragment>
      <div className="m-2 md:mx-0 lg:mx-0 lg:my-0 bg-zinc-100">
        <div className="m-4 py-4">
          <div className="flex text-yellow-500">{props.star}</div>

          <p className="my-4">{props.comments}</p>
          <div className="flex">
            <img
              className="w-20 h-20 md:w-[80px] md:h-[80px] rounded-[80px] resize object-cover"
              src={props.image}
              alt="customerImage"
            ></img>
            <h1 className="mt-4 mx-2 lg:mt-7">{props.name}</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomerDetails;
