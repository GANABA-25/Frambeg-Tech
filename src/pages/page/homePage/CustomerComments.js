import { Fragment } from "react";

import { MdStarRate } from "react-icons/md";

import CustomerDetails from "../../components/CustomerDetails";

const star = (
  <Fragment>
    <div className=" flex">
      <MdStarRate />
      <MdStarRate />
      <MdStarRate />
      <MdStarRate />
      <MdStarRate />
      <MdStarRate />
      <MdStarRate />
    </div>
  </Fragment>
);

const Comments = [
  {
    star: star,
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab fuga odit molestiae ipsam, nam eum hic assumenda quod dicta saepe",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711544711/FrambegTech/HOME%20PAGE/CUSTOMERS/Nathaniel_z7hnaj.jpg",
    name: "Nathaniel Owusu",
  },
  {
    star: star,
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab fuga odit molestiae ipsam, nam eum hic assumenda quod dicta saepe",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542323/FrambegTech/HOME%20PAGE/CUSTOMERS/Paul_2_cohqje.jpg",
    name: "Paul Yeboah Asamoah",
  },
  {
    star: star,
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab fuga odit molestiae ipsam, nam eum hic assumenda quod dicta saepe",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542311/FrambegTech/HOME%20PAGE/CUSTOMERS/Kusi_oe96vq.jpg",
    name: "Isaac Kusi",
  },
  {
    star: star,
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab fuga odit molestiae ipsam, nam eum hic assumenda quod dicta saepe",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542311/FrambegTech/HOME%20PAGE/CUSTOMERS/Dennis_eojd3y.jpg",
    name: "Dennis Owusu",
  },
  {
    star: star,
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab fuga odit molestiae ipsam, nam eum hic assumenda quod dicta saepe",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542318/FrambegTech/HOME%20PAGE/CUSTOMERS/Marina_xgou4f.jpg",
    name: "Marina Opoku Brefo",
  },
  {
    star: star,
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab fuga odit molestiae ipsam, nam eum hic assumenda quod dicta saepe",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711544711/FrambegTech/HOME%20PAGE/CUSTOMERS/Nathaniel_z7hnaj.jpg",
    name: "Nathaniel Owusu",
  },
];

const CustomerComments = () => {
  return (
    <Fragment>
      <section className="mb-8 mx-3 lg:mx-0">
        <div className="lg:w-4/5 lg:m-auto">
          <h1 className="text-xl m-2 md:text-2xl md:m-0 md:mb-4 lg:m-0 lg:mb-4 font-bold opacity-75">
            What is everyone saying?
          </h1>
          <div className="md:grid md:grid-cols-3 md:gap-2 lg:gap-4">
            {Comments.map((Comment) => (
              <CustomerDetails
                star={Comment.star}
                comments={Comment.comments}
                image={Comment.image}
                name={Comment.name}
              />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CustomerComments;
