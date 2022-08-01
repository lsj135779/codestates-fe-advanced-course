import { createSlice } from "@reduxjs/toolkit";

const name = "post";
const initialState = {
  allPosts: [],
  post: [],
};

export const postSlice = createSlice({
  name,
  initialState,
  reducers: {
    // 게시글을 모두 가져오는 action
    getAllPostsData: (state, action) => {
      state.allPosts = action.payload;
    },
    getPostData: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { getAllPostsData, getPostData } = postSlice.actions;
export default postSlice.reducer;
