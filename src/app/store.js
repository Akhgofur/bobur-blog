import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../components/main/home/home-main/posts-slice/posts-slice';


export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
