import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", userId: "1", title: "How to fix CORS issue", body: "CORS is a security system." },
  { id: "2", userId: "1", title: "How to fix CORS issue", body: "CORS is a security system." },
  { id: "3", userId: "1", title: "How to fix CORS issue", body: "CORS is a security system." },
  { id: "4", userId: "1", title: "How to fix CORS issue", body: "CORS is a security system." },
];

const usersSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;