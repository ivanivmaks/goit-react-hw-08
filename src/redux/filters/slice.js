import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = slice.actions;

export const filtersReducer = slice.reducer;
