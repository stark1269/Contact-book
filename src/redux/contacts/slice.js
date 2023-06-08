import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

// 

const contactsPending = (state) => {
  state.isLoading = true
};

const contactsRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

// 

const getContactsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.items = payload;
};

const addContactsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.items.push(payload);
};

const deleteContactsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.items = state.items.filter(item => item.id !== payload.id);
};

// 

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, getContactsFulfilled)
      .addCase(addContact.fulfilled, addContactsFulfilled)
      .addCase(deleteContact.fulfilled, deleteContactsFulfilled)
      .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), contactsPending)
      .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), contactsRejected)
  }
});

export const contactsReducer = contactsSlice.reducer;