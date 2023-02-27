import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authInitState } from './auth.init-state';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  signupThunk,
} from './auth.thunk';

const isLoggenIn = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
};

const isLoggedOut = (state, { payload }) => {
  toast.error(payload);
  state.token = null;
  state.user = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, isLoggenIn)
      .addCase(loginThunk.rejected, isLoggedOut)
      .addCase(signupThunk.fulfilled, isLoggenIn)
      .addCase(signupThunk.rejected, isLoggedOut)
      .addCase(logoutThunk.fulfilled, isLoggedOut)
      .addCase(logoutThunk.rejected, isLoggedOut)
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(refreshThunk.rejected, () => authInitState);
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['data'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
