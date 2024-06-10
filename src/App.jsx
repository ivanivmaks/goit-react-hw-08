import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "./redux/contactsOps";
import { getLoading, getError } from "./redux/contactsSlice";
import { useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";

export default function App() {
  const isLoading = useSelector(getLoading);
  const isError = useSelector(getError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && <Loader>Loading message</Loader>}
      <SearchBox />
      {isError ? <Error>Error message</Error> : <ContactList />}
    </div>
  );
}
