import { React, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { BookContext } from "../Context/BookContext";
import { toast } from "react-toastify";

const BooksDetails = ( ) => {
  const { id } = useParams();
  const { books, readList, setReadList, wishList, setWishList } =
    useContext(BookContext);
  const currentBook = books.find((b) => Number(id) === Number(b.bookId));

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
  } = currentBook;

  function handleWishList() {
    const isExist =
      readList.some((b) => b.bookId === bookId) ||
      wishList.some((b) => b.bookId === bookId);
    if (!isExist) {
      setWishList([...wishList, currentBook]);
      toast.success(`${bookName} added to wish-list successfully!!`);
    } else {
      toast.error("Book was added!!!");
    }
  }
  function handleReadList() {
    const isExist =
      readList.some((b) => b.bookId === bookId) ||
      wishList.some((b) => b.bookId === bookId);
    if (!isExist) {
      setReadList([...readList, currentBook]);
      toast.success(`${bookName} added to read-list successfully!!`);
    } else {
      toast.error("Book was added!!!");
    }
  }

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-sm my-10 p-10">
        <figure className="flex-1 flex justify-center items-center bg-base-300 py-50">
          <img className="w-[50%]" src={image} alt={bookName} />
        </figure>
        <div className="card-body flex-1 ">
          <h2 className="card-title"> {bookName} </h2>
          <h2 className="my-5">
            By : <strong> {author} </strong>
          </h2>
          <div className="border-t border-b py-5">
            <h3 className="text-xl">{category}</h3>
          </div>
          <div className="py-4 border-b">
            <p>
              <strong>Review : </strong> {review}
            </p>
            <div className="my-5">
              <span>
                {" "}
                <strong> Tag : </strong>{" "}
              </span>
              {tags.map((tag, ind) => (
                <div
                  key={ind}
                  className="badge text-green-500 bg-green-200 p-4 rounded-2xl"
                >
                  {" "}
                  {tag}{" "}
                </div>
              ))}
            </div>
          </div>
          <div className="my-10">
            <p>
              Number of Pages: <strong>{totalPages}</strong>
            </p>
            <p>
              Publisher: <strong>{publisher}</strong>
            </p>
            <p>
              Year of Publishing: <strong>{yearOfPublishing}</strong>
            </p>
            <p className="mb-10">
              Rating: <strong>{rating}</strong>
            </p>
            <button
              onClick={handleReadList}
              className="btn btn-ghost font-bold mr-5 border border-gray-200"
            >
              Read
            </button>
            <button
              onClick={handleWishList}
              className="btn btn-success text-white bg-sky-400 font-bold"
            >
              Wishlist
            </button>
            <div className="text-center my-10">
              <button onClick={goBack} className="btn btn-error text-white">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksDetails;
