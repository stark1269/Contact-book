import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/selectors";

export const selectContacts = state => state.contacts;
export const selectContactsItems = state => state.contacts.items;

export const selectFilteredContacts = createSelector([selectContactsItems, selectFilter], (contacts, filter) => {
  return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
});