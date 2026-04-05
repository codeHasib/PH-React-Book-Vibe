import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Components/HomePage";
import ListedBooks from "../Components/ListedBooks";
import PagesToRead from "../Components/PagesToRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);

export default router;
