export const selectBooks = (booksType) => (state) => {
  switch (booksType) {
    case "favorites":
      return state.books.filter((book) => book.isFavorite);
    case "not-favorites":
      return state.books.filter((book) => !book.isFavorite);
    default:
      return state.books;
  }
};

export const selectBookById = (id) => (state) =>
  state.books.find((book) => book.id === Number(id));

export const selectFavoriteBooksCount = (state) =>
  state.books.filter((item) => item.isFavorite).length;
