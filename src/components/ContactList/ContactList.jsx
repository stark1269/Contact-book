import { ContactItem } from "components/ContactItem/ContactItem";
import { List, Title } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectFilteredContacts } from "redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";
import { ProgressBar } from  'react-loader-spinner'

export const ContactList = () => {
  const { isLoading, error } = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return (
    <>
      {!filteredContacts.length && <Title>Your contact book is empty</Title>}
      {isLoading ? <ProgressBar /> : <List>
        {filteredContacts.map(item => {
          return (
            <ContactItem key={item.id} item={item}></ContactItem>
          )
        })}
      </List>}
      {error && <p>{error}</p>}
    </>
  )
};
