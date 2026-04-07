import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { BookContext } from "../Context/BookContext";

const BookList = ({ book }) => {
  const { currentPage, readList, setReadList, wishList, setWishList } =
    useContext(BookContext);

  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    rating,
    category,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  function remove() {
    if (currentPage === "read-list") {
      const newReadList = readList.filter((b) => bookId !== b.bookId);
      setReadList(newReadList);
    } else if (currentPage === "wish-list") {
      const newWishList = wishList.filter((b) => bookId !== b.bookId);
      setWishList(newWishList);
    }
    toast.error(`${bookName} removed successfully`);
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl mt-10 p-5 border border-gray-300 relative flex-wrap">
      <figure className="h-62.5 rounded-2xl p-5 bg-base-300">
        <img className="h-full" src={image} alt={bookName} />
      </figure>
      <div
        onClick={remove}
        className="absolute top-3 right-5 text-xl text-red-400 p-2 border border-gray-300 rounded cursor-pointer"
      >
        <MdDelete></MdDelete>
      </div>
      <div className="card-body">
        <h2 className="card-title"> {bookName} </h2>
        <h2>
          {" "}
          By : <strong>{author}</strong>{" "}
        </h2>
        <div className="border-b border-b-gray-300 pb-5">
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
        <div className="pt-3 space-y-3">
          <h2 className="flex items-center gap-2 font-bold">
            Rating: {rating} <FaStar></FaStar>
          </h2>
          <h2 className="font-bold">Pages: {totalPages}</h2>
          <ul className="flex items-center list-disc list-inside gap-5 font-bold">
            <li>{category}</li>
            <li>{publisher}</li>
            <li>{yearOfPublishing}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookList;
