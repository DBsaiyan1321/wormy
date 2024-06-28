import { Book } from "./commonTypes"

export interface BooksByGenre { [key: string]: Book[] }

export const organizeBooksByGenre = (books: Book[]): BooksByGenre => {
  const booksByGenre: BooksByGenre = { };

  for (const book of books) {
    const { genre } = book;

    if (genre in booksByGenre) {
      booksByGenre[genre].push(book);
    } else {
      booksByGenre[genre] = [book];
    }
  }

  return booksByGenre;
}
