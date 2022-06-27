import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Blah blah", email: "1@gmail.com" },
  { id: 2, name: "Blah 2", email: "12@gmail.com" },
  { id: 3, name: "Blah 3", email: "123@gmail.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {},
});

export const allusers = (state) => state.users;

export default userSlice.reducer;
