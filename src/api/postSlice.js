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
export const createPost = createAsyncThunk("posts/createPost", async (data) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: JSON.stringify(data)
    })
    const post = res.json()
    return post
  } catch (error) {
    console.log(error)
  }
})
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (initialState) => {
    try {
      const { id } = initialState;
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
)

export const editPost = createAsyncThunk("posts/editPost", async(initialState,data)=>{
  try {
    const { id, title, body } = initialState;
    const data = {
      title: title,
      body: body
    }
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(data)
        }
    )
    if (res?.status === 200) return initialState;
    return `${res.status} : ${res.statusText}`;
  } catch (error) {
    console.log(error)
  }
})


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
        const OldPosts = state.posts.filter((post) => post.id !== id);
        state.posts = OldPosts;
      })
      .addCase(createPost.fulfilled, (state,action)=> {
        console.log(action.meta.arg.data)
        state.posts = [...state.posts, action.meta.arg.data]
      })
  },
});

export const postReducer = postSlice.reducer;
