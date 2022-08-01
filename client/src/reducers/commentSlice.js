import { createSlice } from "@reduxjs/toolkit";

const name = "comment";
const initialState = {
  comment: [],
};

export const commentSlice = createSlice({
  name,
  initialState,
  reducers: {
    getCommentData: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export const { getCommentData } = commentSlice.actions;
export default commentSlice.reducer;
