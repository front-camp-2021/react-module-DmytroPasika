import React from "react";
import { useSelector } from "react-redux";
import { useParams, Redirect, Link } from "react-router-dom";
import { Divider, Header } from "semantic-ui-react";
import { selectBookById } from "../../features/books/selectors";

export function BookPage() {
  const { id } = useParams();
  const book = useSelector(selectBookById(id));

  if (!book) {
    // return <>no book</>
    return <Redirect to="/not-found" />;
  }

  return (
    <>
      <Header>This is a page for Book # {id}</Header>
      <div>Book title is: {book.title}</div>
      <div>Book author is: {book.author}</div>
      <Divider />
      <div>Book description: {book.description}</div>
      <Divider />
      <Link to="/">Go back to all books</Link>
    </>
  );
}
