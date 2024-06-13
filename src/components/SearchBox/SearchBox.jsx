import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = (event) => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <div>
      <label>Find contacts by name:</label>
      <input
        className={css.filter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
