import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import BookList from "./BookList";

const WishList = () => {
  const { sort, wishList, setWishList } = useContext(BookContext);
  if (sort === "Pages") {
    const pageSort = wishList.sort((a, b) => a.totalPages - b.totalPages);
    setWishList(pageSort);
  } else if (sort === "Rating") {
    const ratingSort = wishList.sort((a, b) => a.rating - b.rating);
    setWishList(ratingSort);
  }
  return (
    <>
      {wishList.length > 0 ? (
        wishList.map((item, ind) => <BookList key={ind} book={item}></BookList>)
      ) : (
        <div className="p-30 text-center font-extrabold text-3xl bg-base-300 my-10 rounded-3xl">
          {" "}
          Nothing To show{" "}
        </div>
      )}
    </>
  );
};

export default WishList;
