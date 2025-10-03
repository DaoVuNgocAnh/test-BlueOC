import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
