import { Outlet } from "react-router";
import NavBar from "./Components/NavBar";
import { BookContext } from "./Context/BookContext";
import axios from "axios";
import { use } from "react";

const bookData = axios.get("/src/assets/public/booksData.json");

function App() {
  const booksRes = use(bookData);
  const books = booksRes.data;

  return (
    <>
      <BookContext.Provider value={{ books }}>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </BookContext.Provider>
    </>
  );
}

export default App;
