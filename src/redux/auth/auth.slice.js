import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authInitState } from './auth.init-state';
import { loginThunk } from './auth.thunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['data'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
