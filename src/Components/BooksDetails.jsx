import React from "react";
import { useParams } from "react-router";

const BooksDetails = () => {
  const { id } = useParams();
  return <div>This is bookId {id}</div>;
};

export default BooksDetails;
