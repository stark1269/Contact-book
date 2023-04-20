import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./Container/Container";
import { Section } from "./Section/Section";
import { FindContacts } from "./FindContacts/FindContacts";
import contacts from '../contacts.json';

export class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  addContact = (newContact, name) => {
    if (this.state.contacts.some(value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
      alert(`${name} is already in contacts!`)
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }))
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }))
  };

  render() {
    return (
    <Container>
      <Section title="Phonebook">
          <ContactForm onSave={this.addContact} />
      </Section>
        <Section title="Contacts">
          <FindContacts/>
        <ContactList contacts={this.state.contacts} onDelete={this.deleteContact} />
      </Section>
    </Container>
  );
  };
};