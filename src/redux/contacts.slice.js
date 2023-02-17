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

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
