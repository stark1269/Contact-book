import { ContactItem } from "components/ContactItem/ContactItem";
import { List } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";

export const ContactList = () => {
  const stateFilter = useSelector(getFilter);
  const stateContacts = useSelector(getContacts);
  
  const visibleContacts = stateContacts.filter(item => item.name.toLowerCase().includes(stateFilter.toLowerCase()));

  return (
    <List>
      {visibleContacts.map(item => {
        return (
          <ContactItem key={item.id} item={item}></ContactItem>
        )
      })}
    </List>
  )
};