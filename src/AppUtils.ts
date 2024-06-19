import { Book } from "./commonTypes"

interface CategorizedBooks { [key: string]: Book[] }

export const categorizeBooks = (books: Book[]): CategorizedBooks => {
  const categorizedBooks: CategorizedBooks = { };

  for (const book of books) {
    const { genre } = book;

    if (genre in categorizedBooks) {
      categorizedBooks[genre].push(book);
    } else {
      categorizedBooks[genre] = [book];
    }
  }

  return categorizedBooks;
}
