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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter));
    
    return (
    <Container>
      <Section title="Phonebook">
          <ContactForm onSave={this.addContact} />
      </Section>
        <Section title="Contacts">
          <FindContacts value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </Section>
    </Container>
  );
  };
};