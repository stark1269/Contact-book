import { Container } from "./Container/Container";
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { FindContacts } from "./FindContacts/FindContacts";


export const App = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <FindContacts />
        <ContactList />
      </Section>
    </Container>
  )
};