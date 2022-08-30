import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", userId: "1", title: "How to fix CORS issue", body: "CORS is a security system." }
];

const usersSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;