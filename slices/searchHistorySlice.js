import { createSlice } from "@reduxjs/toolkit";

export const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState: {
    history: [],
  },
  reducers: {
    addSearched: (state, action) => {
      state.history = [...state.history, action.payload];
    },
  },
});

export const { addSearched } = searchHistorySlice.actions;

export default searchHistorySlice.reducer;
