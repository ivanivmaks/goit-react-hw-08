import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../../components/SearchBox/SearchBox";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const isInContacts = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${values.name} вже в контактах☝️`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div className={css.div}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.field}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage name="name" component="span" />
          </div>

          <div className={css.field}>
            <label htmlFor={numberId}>Number</label>
            <Field type="text" name="number" id={numberId} />
            <ErrorMessage name="number" component="span" />
          </div>

          <button className={css.addBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
      <SearchBox />
    </div>
  );
}
