import { configureStore } from '@reduxjs/toolkit'
import PostSlice from './modules/PostSlice'

export const store = configureStore(
  {
    reducer: {
      post: PostSlice
    }
  }
)