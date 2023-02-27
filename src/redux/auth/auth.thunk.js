import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateAPI, publicAPI, token } from 'services/auth.services';
import { selectAuthToken } from './auth.selectors';

export const loginThunk = createAsyncThunk(
  'login',
  async (loginData, thunkAPI) => {
    try {
      const { data } = await publicAPI.post('users/login', loginData);
      token.set(`Bearer ${data.token}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signupThunk = createAsyncThunk(
  'signup',
  async (signupData, thunkAPI) => {
    try {
      const { data } = await publicAPI.post('/users/signup', signupData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await privateAPI.post('/users/logout');    
    token.reset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk(
  'refresh',
  async (_, { getState, rejectWithValue }) => {
    const persistedToken = selectAuthToken(getState());

    if (!persistedToken) {
      return rejectWithValue('Unable to fetch user');
    }

    token.set(persistedToken);

    try {
      const { data } = await privateAPI.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
