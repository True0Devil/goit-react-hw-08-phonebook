import { configureStore } from '@reduxjs/toolkit';
import { authInitState } from './auth/auth.init-state';
import { authReducer } from './auth/auth.slice';
import { initialContacts } from './contacts/contacts.initState';
import { contactsReducer } from './contacts/contacts.slice';
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
  auth: authInitState,
};

export const store = configureStore({
  preloadedState: initState,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
