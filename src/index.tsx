import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from './ErrorPage';
import AddBookForm from './AddBookForm/AddBookForm';
import { Book } from './commonTypes';
import Settings from './Settings/Settings';
import BookDetailsPage from './BookDetailsPage/BookDetailsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    // TODO: In App, you would need to use useLoaderData to grab the books that were fetched
    // loader={fetchBooks},
    <Route element={<App />} errorElement={<ErrorPage />} path="/">
      {/* TODO: This rout won't be necessary anymore, since it will be a modal in App */}
      <Route element={<AddBookForm addBook={(value: Book) => { console.log(value) }} />} path="add-book" />
      <Route element={<Settings />} path="settings" />
      <Route element={<BookDetailsPage />} path="book/:bookId" />

    </Route>
  )
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
