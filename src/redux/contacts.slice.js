import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from './contacts.initState';

import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './contacts.thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  extraReducers: {
    [fetchContactsThunk.fulfilled]: (state, { payload }) => {
      state.items = payload;
    },

    [addContactThunk.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
    },

    [deleteContactThunk.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload.id);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
