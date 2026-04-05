import { Outlet } from "react-router";
import NavBar from "./Components/NavBar";
import { BookContext } from "./Context/BookContext";
import axios from "axios";
import { use, useState } from "react";
import { ToastContainer } from "react-toastify";

const bookData = axios.get("/src/assets/public/booksData.json");

const readBook = axios.get("/src/assets/public/readPagesData.json");

function App() {
  const booksRes = use(bookData);
  const books = booksRes.data;

  const readBookRes = use(readBook);
  const pagesRead = readBookRes.data;

  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

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
