import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Components/HomePage";
import ListedBooks from "../Components/ListedBooks";
import PagesToRead from "../Components/PagesToRead";
import BooksDetails from "../Components/BooksDetails";
import ErrorPage from "../Components/ErrorPage";
import ReadList from "../Components/ReadList";
import WishList from "../Components/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "listedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          { index: true, element: <ReadList></ReadList> },
          { path: "wishList", element: <WishList></WishList> },
        ],
      },
      {
        path: "pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "books/:id",
        element: <BooksDetails></BooksDetails>,
      },
    ],
  },
]);

export default router;
