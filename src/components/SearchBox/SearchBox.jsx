import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
 const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  const handleFilter = (event) => {
   const normalizedValue = event.target.value.toLowerCase();

   dispatch(changeFilter(normalizedValue));
  };

  const filterId = useId();
  return (
    <div>
      <Formik initialValues={value} onSubmit={() => {}}>
        <Form>
          <label htmlFor={filterId}> Find contacts by name:</label>
          <Field
            type="text"
            name="filter"
            id={filterId}
            className={css.filter}
            value={value}
            onChange={handleFilter}
          />
        </Form>
      </Formik>
    </div>
  );
}
