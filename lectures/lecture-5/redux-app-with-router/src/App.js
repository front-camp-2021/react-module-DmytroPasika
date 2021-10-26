import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { BooksList } from "./components/books-list/books-list";
import { BookPage } from "./pages/book-page/book-page";
import { NotFoundPage } from "./pages/not-found/not-found";
import { Layout } from "./components/layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <BooksList booksType="all" />
          </Route>

          <Route exact path="/favorites">
            <BooksList booksType="favorites" />
          </Route>

          <Route exact path="/not-favorites">
            <BooksList booksType="not-favorites" />
          </Route>

          <Route exact path="/not-found" component={NotFoundPage} />

          <Route exact path="/:id" component={BookPage} />

          <Redirect to="/not-found" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
