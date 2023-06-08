import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { FindContacts } from "components/FindContacts/FindContacts";
import { Section } from "components/Section/Section";
import { Div, Wrapper } from "./Contacts.styled";

const Contacts = () => {
  return (
    <>
      <Div>
        <Section title="Add a contact to the contact book">
          <ContactForm />
        </Section>
      </Div>
      <Wrapper>
        <Section title="Contacts list">
          <FindContacts />
          <ContactList />
        </Section>
      </Wrapper>
    </>
  )
};

export default Contacts