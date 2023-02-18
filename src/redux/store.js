import { configureStore } from '@reduxjs/toolkit';
import { initialContacts } from './contacts.initState';
import { contactsReducer } from './contacts.slice';
import { filterReducer } from './filter.slice';

const initState = {
  contacts: initialContacts,
  filter: '',
};

export const store = configureStore({
  preloadedState: initState,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },  
});
