import { Field, Form, Formik } from "formik";
import chrolloSittingWithBook from "../images/chrollo-sitting-with-book.png"
import "./AddBookForm.scss"

interface InitialValues { genre: String, title: string }

interface Values { [key: string]: any }

// https://formik.org/docs/api/formik#setsubmitting-issubmitting-boolean--void
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions 
type SetSubmitting =  (isSubmitting: boolean) => void

// ----------

// https://www.typescriptlang.org/docs/handbook/2/functions.html#parameter-destructuring
const onSubmit = (values: Values, { setSubmitting }: { setSubmitting: SetSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400)
};

const initialValues: InitialValues = { genre: "", title: "" };

// ----------

const AddBookForm = () => {
  // TODO: Add error messages to the input fields

  // https://formik.org/docs/overview#reducing-boilerplate
  return (
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
  );
};

export default AddBookForm;