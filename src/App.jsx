import { Outlet } from "react-router";
import NavBar from "./Components/NavBar";
import { BookContext } from "./Context/BookContext";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const bookData = axios.get("/src/assets/public/booksData.json");

const readBook = axios.get("/src/assets/public/readPagesData.json");

function App() {
  const booksRes = use(bookData);
  const books = booksRes.data;

  const readBookRes = use(readBook);
  const pagesRead = readBookRes.data;

  const [readList, setReadList] = useState(() => {
    const saved = localStorage.getItem("myReadingList");
    return saved ? JSON.parse(saved) : [];
  });
  const [wishList, setWishList] = useState(() => {
    const saved = localStorage.getItem("myWishList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("myReadingList", JSON.stringify(readList));
  }, [readList]);

  useEffect(() => {
    localStorage.setItem("myWishList", JSON.stringify(wishList));
  }, [wishList]);

  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState("read-list");

  return (
    <>
      <BookContext.Provider
        value={{
          books,
          readList,
          setReadList,
          wishList,
          setWishList,
          pagesRead,
          sort,
          setSort,
          currentPage,
          setCurrentPage,
        }}
      >
        <NavBar></NavBar>
        <Outlet></Outlet>
      </BookContext.Provider>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
