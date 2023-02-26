import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicAPI } from 'services/auth.services';

export const loginThunk = createAsyncThunk(
  'login',
  async (loginData, thunkAPI) => {
    try {
      const { data } = await publicAPI.post('users/login', loginData);
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
      await publicAPI.post('/users/signup', signupData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
