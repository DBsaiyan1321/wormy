import { Field, Form, Formik } from "formik";
import chrolloSittingWithBook from "../images/chrollo-sitting-with-book.png"
import "./AddBookForm.scss"
import { Book } from '../commonTypes'
import ReactModal from 'react-modal';
import { useState } from "react";

// TODO: Maybe I can rename this to Book. Would that work across the app?
interface InitialValues { genre: string, id: string, title: string }

interface Values { [key: string]: any }

// https://formik.org/docs/api/formik#setsubmitting-issubmitting-boolean--void
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions 
type SetSubmitting =  (isSubmitting: boolean) => void

// So, setBooks can either accept a function or a value. How do I write TypeScript for that?
// setBooks(existingState => existingState + 1)
// setBooks(nextState)
type AddBook = (book: Book) => void;

type CloseModal = () => void;

// ----------

const initialValues: InitialValues = { id: "", genre: "", title: "" };

// ----------

// const AddBookForm = ({ addBook, isOpen }: { addBook: AddBook, closeModal: CloseModal, isOpen: boolean }) => {
const AddBookForm = ({ addBook }: { addBook: AddBook }) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = (): void => {
    setIsOpen(false)
  }

  // TODO: Add error messages to the input fields

  // https://www.typescriptlang.org/docs/handbook/2/functions.html#parameter-destructuring
  const onSubmit = (values: Book, { setSubmitting }: { setSubmitting: SetSubmitting }): void => {
    addBook(values);
    // TODO: I can use a Redirect to bring them to the detail page of this book.
    // For now, I will just close the modal
    closeModal()
  };

  // https://formik.org/docs/overview#reducing-boilerplate
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <ReactModal isOpen={isOpen} onRequestClose={() => { closeModal() }}>
        <div className="add-book-form-container">

          <h1 className="add-book-form-title">Add Book Form</h1>

          <img src={chrolloSittingWithBook} alt="chrollo sitting with book" className="add-book-form-image" />

          <Formik initialValues={initialValues} onSubmit={onSubmit}>

            {({ isSubmitting }: { isSubmitting: boolean }) => (
              // https://formik.org/docs/api/field
              // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
              <Form>

                <div className="input-container">
                  <label className="input-label" htmlFor="titleField">Title</label>
                  <Field className="input-field" id="titleField" name="title" type="text" />
                </div>

                <div className="input-container">
                  {/* TODO: Make the genre input a dropdown. You should be able to add your own genre to this dropdown too. Maybe I can
                  have an option be "Add your own..." then clicking that will make another input appear for you to add. This might be the
                  simplest way to do it, and it won't take away from the feel of the app. */}
                  <label className="input-label" htmlFor="genreField">Genre</label>
                  <Field className="input-field" id="genreField" name="genre" type="text" />
                </div>

                <button className="submit-button" disabled={isSubmitting} type="submit">Submit</button>

              </Form>
            )}

          </Formik>

        </div>
      </ReactModal>
    </>
  );
};

export default AddBookForm;