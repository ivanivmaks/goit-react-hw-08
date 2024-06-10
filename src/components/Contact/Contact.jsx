import { GoPersonFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(deleteContact(contact.id))
    }

  return (
    <>
      <div>
        <p className={css.item}>
          <GoPersonFill />
          {contact.name}
        </p>
        <p className={css.item}>
          <FaPhoneAlt />
          {contact.number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={(handleDelete)}
      >
        Delete
      </button>
    </>
  );
}
