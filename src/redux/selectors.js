import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectContactsItems = state => state.contacts.items;

export const selectFilteredContacts = createSelector([selectContactsItems, selectFilter], (contacts, filter) => {
  return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
});