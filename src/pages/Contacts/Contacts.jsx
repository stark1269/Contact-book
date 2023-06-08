import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { FindContacts } from "components/FindContacts/FindContacts";
import { Section } from "components/Section/Section";

const Contacts = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <FindContacts />
        <ContactList />
      </Section>
    </>
  )
};

export default Contacts