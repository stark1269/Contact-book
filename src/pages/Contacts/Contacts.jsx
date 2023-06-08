import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { FindContacts } from "components/FindContacts/FindContacts";
import { Section } from "components/Section/Section";
import { Div } from "./Contacts.styled";

const Contacts = () => {
  return (
    <Div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <FindContacts />
        <ContactList />
      </Section>
    </Div>
  )
};

export default Contacts