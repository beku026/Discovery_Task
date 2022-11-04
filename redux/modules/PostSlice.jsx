import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import axios from 'axios';

const initialState = {
  posts: [],
  limit: 10,
  loader: false,
}

export const AsyncGetPosts = createAsyncThunk(
  'post/AsyncGetPosts',
  async (limit, {dispatch}) => {
    try {
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
      dispatch(getPosts(data))
    }
    catch (error) {
      console.log(error)
    }
  }
)

const PostSlice = createSlice(
  {
    name: "post",
    initialState,
    reducers: {
      getPosts: ( state, action ) => {
        state.posts = action.payload;
      },
      getPostsPlusTen: (state) => {
        state.limit += 10
      },
      getPostsMinusAll: (state) => {
        state.limit = 10
      }
    },
    extraReducers: {
      [AsyncGetPosts.pending]: ( state ) => {
        state.loader = true
      },
      [AsyncGetPosts.fulfilled]: ( state ) => {
        state.loader = false
      },
    }
  }
)

export const { getPosts ,getPostsPlusTen, getPostsMinusAll } = PostSlice.actions;
export default PostSlice.reducer;