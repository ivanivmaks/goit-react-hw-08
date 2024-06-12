import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from './LoginForm.module.css'

export default function LoginForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });
  

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(logIn(values));
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit} className={css.form}>
          <ErrorMessage className={css.error} name="email" component="div" />
          <Field
            className={css.field}
            id="email"
            name="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <ErrorMessage className={css.error} name="password" component="div" />
          <Field
            className={css.field}
            id="password"
            type='password'
            name="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <button className={css.button} type="submit">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}
