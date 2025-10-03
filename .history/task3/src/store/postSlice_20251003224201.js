import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Lấy danh sách posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
});

// Lấy chi tiết post
export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (id) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.data;
});

// Lấy comment của post
export const fetchComments = createAsyncThunk('posts/fetchComments', async (id) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return res.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    postDetail: null,
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchPosts.fulfilled, (state, action) => { state.loading = false; state.posts = action.payload; })
      .addCase(fetchPosts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; })

      .addCase(fetchPostById.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchPostById.fulfilled, (state, action) => { state.loading = false; state.postDetail = action.payload; })
      .addCase(fetchPostById.rejected, (state, action) => { state.loading = false; state.error = action.error.message; })

      .addCase(fetchComments.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchComments.fulfilled, (state, action) => { state.loading = false; state.comments = action.payload; })
      .addCase(fetchComments.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});

export default postsSlice.reducer;
