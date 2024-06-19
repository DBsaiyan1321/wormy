import React, { useState } from 'react';
import background from './images/books.jpg';
import './App.scss';
import AddBookForm from './AddBookForm/AddBookForm';
import { Book } from './commonTypes'
import { categorizeBooks } from './AppUtils';


function App() {
  // https://stackoverflow.com/questions/63633198/type-for-the-setstate-function-of-the-usestate-hook
  // https://www.typescriptlang.org/docs/handbook/2/functions.html#specifying-type-arguments
  // const [books, setBooks] = useState<Book[]>([])
  const [books, setBooks] = useState<Book[]>([
    { genre: "Fiction", id: "1", title: "Fiction Book 1" },
    { genre: "Fiction", id: "2", title: "Fiction Book 2" },
    { genre: "Non Fiction", id: "4", title: "Non Fiction Book 2" },
    { genre: "Non Fiction", id: "3", title: "Non Fiction Book 1" }
  ])

  console.log(books)

  // TODO: Is this a good place to use a generic?
  // TODO: How do I write a test for this?
  const addBook = (book: Book) => {
    setBooks((previousState: Book[]): Book[] => [...previousState, book]);
  }

  const categorizedBooks = categorizeBooks(books);
  const genres: string[] = Object.keys(categorizedBooks);

  return (
    <div className="App">

      <header>
        <h1>Wormy</h1>
      </header>

      <img src={background} alt='books' className="background-image" />

      {genres.map((genre: string) => {
        const categoryOfBooks: Book[] = categorizedBooks[genre];
        return (
          <section>
            <h2>{genre}</h2>
            <ul>
              {categoryOfBooks.map((book: Book) => (
                <li>{book.title}</li>
              ))}
            </ul>
          </section>
        )
      })}

      <AddBookForm addBook={addBook} />

      <nav className="navigation-bar">
        <ul className="navigation-bar-items">
          <li className="navigation-bar-item">Home</li>
          <li className="navigation-bar-item">Settings</li>
        </ul>
      </nav>

    </div>
  );
}

export default App;
