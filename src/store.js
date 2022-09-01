import { configureStore } from "@reduxjs/toolkit";
import {postReducer} from './api/postSlice'

export default configureStore({
  reducer: {
    posts: postReducer
  },
});