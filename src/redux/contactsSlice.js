import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initState from '../contacts.json'
import Notiflix from "notiflix";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: initState,
  },
  reducers: {
    addContact(state, action) {
      if (state.contacts.some(value => value.name.toLocaleLowerCase() === action.payload.name.toLocaleLowerCase())) {
        Notiflix.Notify.failure(`${action.payload.name} is already in contacts!`);
      } else {
        const newContact = { ...action.payload, id: nanoid() }
        state.contacts.unshift(newContact);
      }
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);