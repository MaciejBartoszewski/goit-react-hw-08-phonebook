import {
  addContact,
  deleteContact,
  setFilter,
  fetchContacts,
} from './contacts/actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const contactsReducer = createReducer(initialState.contacts, {
  [addContact.fulfilled]: (state, action) => {
    state.items.push(action.payload);
  },
  [deleteContact.fulfilled]: (state, action) => {
    const index = state.items.findIndex(
      contacts => contacts.id === action.payload
    );
    state.items.splice(index, 1);
  },
  [setFilter.fulfilled]: (state, action) => {
    state.filter = action.payload;
  },
  [fetchContacts.fulfilled]: (state, action) => {
    state.items = action.payload;
  },
  [fetchContacts.rejected]: (state, action) => {
    console.error(action.error);
  },
});
