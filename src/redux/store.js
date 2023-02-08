import { configureStore } from '@reduxjs/toolkit';
import { initialContacts } from './contacts.initState';
import { contactsReducer } from './contacts.slice';
import { filterReducer } from './filter.slice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const initState = {
  contacts: initialContacts,
  filter: '',
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
