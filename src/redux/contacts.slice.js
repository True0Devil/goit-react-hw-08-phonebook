import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from './contacts.initState';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  reducers: {
    deleteContact: (state, { payload }) => {
      state.data = state.data.filter(contact => contact.id !== payload);

      if (!state.data.length) {
        state.data = initialContacts.data;
      }
    },

    addContact: (state, { payload }) => {
      state.data.some(
        contact => contact.name.toLowerCase() === payload.name.toLowerCase()
      )
        ? alert(`${payload.name} is already in your contacts`)
        : state.data.unshift(payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { deleteContact, addContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
