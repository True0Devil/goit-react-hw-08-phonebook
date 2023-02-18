import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { initialContacts } from './contacts.initState';

import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './contacts.thunk';

const isPending = state => {
  state.isLoading = true;
};

const isRejected = (state, { payload }) => {
  state.error = true;
  toast.error(payload);
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, isPending)
      .addCase(fetchContactsThunk.rejected, isRejected)
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactThunk.pending, isPending)
      .addCase(addContactThunk.rejected, isRejected)
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContactThunk.pending, isPending)
      .addCase(deleteContactThunk.rejected, isRejected)
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
