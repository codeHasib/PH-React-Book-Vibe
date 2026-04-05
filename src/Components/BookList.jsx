import React from "react";

const BookList = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    rating,
    category,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="card card-side bg-base-100 shadow-xl mt-10 p-5 border border-gray-300">
      <figure className="h-62.5 rounded-2xl p-5 bg-base-300">
        <img className="h-full" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {bookName} </h2>
        <h2>
          {" "}
          By : <strong>{author}</strong>{" "}
        </h2>
        <div>
          <strong className="font-extrabold"> Tag: </strong>
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge text-green-500 bg-green-100 p-4 rounded-xl mr-4"
            >
              {" "}
              {tag}{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
