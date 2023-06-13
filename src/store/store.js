import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userProvider';

export default configureStore({
  reducer: {
    user : userSlice
  },
})