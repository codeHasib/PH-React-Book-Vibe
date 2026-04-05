import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BooksCard = ({ book }) => {
  const { bookId, bookName, author, image, tags, rating, category } = book;
  return (
    <>
      <div className="card bg-base-100 shadow-lg border border-gray-300 p-5">
        <figure className="flex justify-center items-center mb-4 bg-base-300 py-5 rounded-4xl">
          <img className="w-[50%]" src={image} alt={bookName} />
        </figure>
        <div>
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge text-green-500 bg-green-200 p-3 mr-3 font-bold"
            >
              {" "}
              {tag}{" "}
            </div>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            {bookName}{" "}
          </h2>
          <p>By : {author}</p>
          <div className="card-actions justify-between border-t border-dashed py-4">
            <h3 className="font-bold text-lg">{category}</h3>
            <h3 className="flex items-center justify-center gap-2 font-bold text-lg">
              {rating} <FaRegStar></FaRegStar>
            </h3>
          </div>
        </div>
        <div className="text-center">
          <Link className="btn btn-accent" to={`books/${bookId}`}>
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default BooksCard;
