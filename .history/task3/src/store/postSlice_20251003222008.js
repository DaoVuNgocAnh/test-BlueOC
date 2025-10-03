import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

// Fetch single post with comments
export const fetchPostDetail = createAsyncThunk("posts/fetchPostDetail", async (id) => {
  const resPost = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const resComments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return { ...resPost.data, comments: resComments.data };
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    detail: null,
    loading: false,
    error: null,
    currentPage: 1,
    postsPerPage: 10,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => { state.loading = true; })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPostDetail.pending, (state) => { state.loading = true; })
      .addCase(fetchPostDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload;
      })
      .addCase(fetchPostDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setPage } = postSlice.actions;
export default postSlice.reducer;
