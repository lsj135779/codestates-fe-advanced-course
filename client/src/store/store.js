import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./../reducers/postSlice";
import commentReducer from "./../reducers/commentSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    comment: commentReducer,
  },
});

export default store;
