import { ContactItem } from "components/ContactItem/ContactItem";
import { List } from "./ContactList.styled";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(item => {
        return (
          <ContactItem key={item.id} item={item} onDelete={onDelete}></ContactItem>
        )
      })}
    </List>
  )
};