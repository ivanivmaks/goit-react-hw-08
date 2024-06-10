import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilters, setStatusFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(setStatusFilter(event.target.value));
  };

  const filterId = useId();
  return (
    <div>
      <Formik initialValues={filter} onSubmit={() => {}}>
        <Form>
          <label htmlFor={filterId}> Find contacts by name</label>
          <Field
            type="text"
            name="filter"
            id={filterId}
            className={css.filter}
            value={filter}
            onChange={handleFilter}
          />
        </Form>
      </Formik>
    </div>
  );
}
