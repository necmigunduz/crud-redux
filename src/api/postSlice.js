import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
};
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
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
export const createPost = createAsyncThunk("posts/createPost", async (data) => {
  try {
    const {userId, title, body } = data.data
    
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { 'Content-type': 'application/json; charset=UTF-8', },
      body: JSON.stringify({userId,title,body}),
    });
    const post = await res.json()
    return post
  } catch (error) {
    console.log(error);
  }
});
export const editPost = createAsyncThunk(
  "posts/editPost",
  async (initialState, data) => {
    try {
      const { userId, id, title, body } = initialState.data;
      
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({userId, id, title, body})
        }
      )
      const post = await res.json()
      return post
    } catch (error) {
      console.log(error);
    }
  }
);
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (initialState) => {
    try {
      const { id } = initialState;
      console.log(id)
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res?.status === 200) return initialState;
      return `${res.status} : ${res.statusText}`;
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
        state.posts = action.payload
        state.loading = false
      })
      .addCase(getPosts.rejected, (state) => ({
        loading: false,
      }))
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = [...state.posts, action.payload]
      })
      .addCase(editPost.fulfilled, (state, action) => {    
        if (!action?.payload.id) {
          console.log("could not delete");
          return;
        }
        const { id } = action.payload;
        const OldPosts = state.posts.filter((post) => post.id !== id);
        OldPosts.push(action.payload)
        state.posts = OldPosts;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action?.payload.id) {
          console.log("could not delete");
          return;
        }
        const { id } = action.payload;
        const OldPosts = state.posts.filter((post) => post.id !== id);
        state.posts = OldPosts;
      })
  },
});

export const postReducer = postSlice.reducer;
