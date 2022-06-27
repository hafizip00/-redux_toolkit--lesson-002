import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../Features/Post/PostSlice";
import UserSlice from "../Features/Users/UserSLlice";

export const Store = configureStore({
  reducer: {
    Posts: PostSlice,
    Users: UserSlice,
  },
});
