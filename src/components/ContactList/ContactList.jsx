import { ContactItem } from "components/ContactItem/ContactItem";
import { List } from "./ContactList.styled";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const { contacts, filter } = useSelector(state => state);
  const visibleContacts = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

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