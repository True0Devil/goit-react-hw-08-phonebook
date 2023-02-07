import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange: (_, { payload }) => payload,
  },
});

export const { filterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
