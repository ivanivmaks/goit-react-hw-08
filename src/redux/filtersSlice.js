import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: '',
  reducers: {
    setStatusFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setStatusFilter } = slice.actions;
export const getFilters = (state) => state.filters || '';
export const filtersReducer = slice.reducer;
