import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import BooksCard from "./BooksCard";

const BooksParent = () => {
  const { books } = useContext(BookContext);
  return (
    <>
      <div className="container mx-auto my-10">
        <h2 className="text-center text-2xl font-semibold mb-5">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {books.map((book, ind) => (
            <BooksCard key={ind} book={book}></BooksCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksParent;
