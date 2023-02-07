import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from './contacts.initState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  reducers: {
    deleteContact: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },

    addContact: (state, { payload }) => {
      state.some(
        contact => contact.name.toLowerCase() === payload.name.toLowerCase()
      )
        ? alert(`${payload.name} is already in your contacts`)
        : state.push(payload);
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
