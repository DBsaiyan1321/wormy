import React, { useState } from 'react';
import background from './images/books.jpg';
import './App.scss';
import AddBookForm from './AddBookForm/AddBookForm';
import { Book } from './commonTypes'
import { BooksByGenre, organizeBooksByGenre } from './AppUtils';
import { Link, Outlet } from 'react-router-dom';

// --- Test data ---

const TEST_DATA_BOOKS: Book[] = [
  { genre: "Fiction", id: "1", title: "Fiction Book 1" },
  { genre: "Fiction", id: "2", title: "Fiction Book 2" },
  { genre: "Non Fiction", id: "4", title: "Non Fiction Book 2" },
  { genre: "Non Fiction", id: "3", title: "Non Fiction Book 1" }
]

// --- Child Components ---

const BookSection = ({ booksOfGenre, genre }: { booksOfGenre: Book[], genre: string }) => (
  <section>
    <h2>{genre}</h2>
    <ul>
      {booksOfGenre.map((book: Book) => (
        <li>{book.title}</li>
      ))}
    </ul>
  </section>
)

// --- Component ---

const App =() => {
  // https://stackoverflow.com/questions/63633198/type-for-the-setstate-function-of-the-usestate-hook
  // https://www.typescriptlang.org/docs/handbook/2/functions.html#specifying-type-arguments
  const [books, setBooks] = useState<Book[]>(TEST_DATA_BOOKS)

  // TODO: Is this a good place to use a generic?
  // TODO: How do I write a test for this?
  const addBook = (book: Book) => {
    setBooks((previousState: Book[]): Book[] => [...previousState, book]);
  }

  const booksByGenre: BooksByGenre = organizeBooksByGenre(books);
  const genres: string[] = Object.keys(booksByGenre);

  return (
    <div className="App">

      <header>
        <h1>Wormy</h1>
      </header>

      <img src={background} alt='books' className="background-image" />

      {genres.map((genre: string) => (<BookSection booksOfGenre={booksByGenre[genre]} genre={genre} />))}

      <AddBookForm addBook={addBook} />

      {/* TODO: To properly do this, I would need the Redux store set up. Because I do
      not want AddBookForm relying on a parent for the addBook function. Unless I do
      a modal, and that might be easiest tbh. So screw it, I will do a modal for AddBook */}
      <Outlet />

      {/* TODO: You can use NavLink component from React Router.
      I read about it in the Getting Started -> Feature Overview section.
      Also, you may want to consider moving this outside of the router. That way it always shows
      on the screen regardless of what page you're on. 
      */}
      <nav className="navigation-bar">
        <ul className="navigation-bar-items">
          <Link className="navigation-bar-item" to="/">Home</Link>
          <Link className="navigation-bar-item" to="/settings">Settings</Link>
        </ul>
      </nav>

    </div>
  );
}

export default App;
