import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
};

export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
});

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (initialState) => {
    try {
      const { id } = initialState;
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response?.status === 200) return initialState;
      return `${response.status} : ${response.statusText}`;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action?.payload.id) {
          console.log("could not delete");
          console.log(action.payload);
          return;
        }

        const { id } = action.payload;
        console.log(state.posts)
        const OldPosts = state.posts.filter((post) => post.id !== id);
        state.posts = OldPosts;
      });
  },
});

export const postReducer = postSlice.reducer;
