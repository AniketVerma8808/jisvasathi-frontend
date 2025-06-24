import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from '../Features/Userslice'

export const store = configureStore({
  reducer: {
    user:userSlice
},
})