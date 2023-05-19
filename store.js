import searchHistoryReducer from "./slices/searchHistorySlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    searchHistory: searchHistoryReducer,
  },
});
