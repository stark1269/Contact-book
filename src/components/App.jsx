import { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./Container/Container";
import { Section } from "./Section/Section";
import { FindContacts } from "./FindContacts/FindContacts";
import Notiflix from "notiflix";
import { nanoid } from 'nanoid';
import initContacts from '../contacts.json';

const getInitContacts = () => {
  const SavedContacts = JSON.parse(localStorage.getItem('contacts'));
  if (SavedContacts !== null) {
    return SavedContacts;
  } else {
    return initContacts
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (value, name) => {
    if (contacts.some(value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
      Notiflix.Notify.failure(`${name} is already in contacts!`);
    } else {
      const newContact = { ...value, id: nanoid() }
      setContacts(state => [newContact, ...state]);
    }
  };

  const deleteContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter));

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSave={addContact} />
      </Section>
      <Section title="Contacts">
        <FindContacts value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </Section>
    </Container>
  )
};