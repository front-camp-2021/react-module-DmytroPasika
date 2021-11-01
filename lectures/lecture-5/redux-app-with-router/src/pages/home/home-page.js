import React from "react";
import { Header } from "semantic-ui-react";
import BooksList from "../../components/books-list/books-list";

export function HomePage() {
  return (
    <>
      <Header>Welcome to Home Page of Books app!</Header>
      <BooksList />
    </>
  );
}
