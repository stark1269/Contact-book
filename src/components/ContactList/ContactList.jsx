import { ContactItem } from "components/ContactItem/ContactItem";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(item => {
        return (
          <ContactItem key={item.id} item={item} onDelete={onDelete}></ContactItem>
        )
      })}
    </ul>
  )
};