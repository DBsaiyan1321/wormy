import React from 'react';
import background from './images/books.jpg';
import './App.scss';
import AddBookForm from './AddBookForm/AddBookForm';

// TODO: Follow many of the things you did at BrightPlan. As you code, they will come to you.
// One example is the imports. The paths were not relative to this file. They were
// the absolute path from the head of the folder.
// Another thing was always having the CSS written a certain way. Like styelint type stuff.
// And having all of the objects in alphabetical order. All props in alphabetical. Accept object as function parameters.
// sass-variables

function App() {
  return (
    <div className="App">
      <header>
        <h1>Wormy</h1>
      </header>
      <img src={background} alt='books' className="background-image" />
      <section>
        <h2>No Genre</h2>
        <ul>
          <li>Book 1</li>
        </ul>
      </section>
      <section>
        <h2>Manga</h2>
        <ul>
          <li>Book 2</li>
        </ul>
      </section>
      <AddBookForm />
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
