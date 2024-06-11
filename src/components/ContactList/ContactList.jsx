import { useSelector, useDispatch } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { GoPersonFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <div className={css.div}>
            <p className={css.items}>
              <GoPersonFill />
              {contact.name}
            </p>
            <p className={css.items}>
              <FaPhoneAlt />
              {contact.number}
            </p>
          </div>
          {
            <button
              className={css.deleteBtn}
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
}
