import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "This post is first", content: "Learning Redux" },
  {
    id: 2,
    title: "This post is Second post",
    content: "Learning Redux and react stuff",
  },
];

const postSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const allposts = (state) => state.Posts;
export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
