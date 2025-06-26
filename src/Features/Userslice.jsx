import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUser } from '../services/api.service'
import { useDispatch } from 'react-redux'
export const fetchUser= createAsyncThunk('fetchUserDetails',async()=>{
    const res= await getUser()
    console.log(res)
    return res.data.user
})
const initialState = {
 isAuthenticated: localStorage.getItem('isAuthenticated') || false,
 user:null,
 token: localStorage.getItem('token') || null,
 loading:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
     loggedInUser:(state,action)=>{
            state.user=action.payload.user
            state.token=action.payload.token
            state.isAuthenticated=true
     },
     logOutUser:(state,action)=>{
        state.user=null,
        state.token=null,
        state.isAuthenticated=false,
        localStorage.removeItem('token')
        localStorage.removeItem('isAuthenticated')
     },
     updateLoader:(state,action)=>{
         state.loading=!state.loading
       }
  },

  extraReducers:(bulider)=>{
     bulider.addCase(fetchUser.pending,(state,action)=>{
       console.log('loading')
    })
    bulider.addCase(fetchUser.fulfilled,(state,action)=>{
       state.user=action.payload
       state.isAuthenticated=true
    })
   
    bulider.addCase(fetchUser.rejected,(state,action)=>{
     console.log('failed to fetch')
    })
  }
})

// Action creators are generated for each case reducer function
export const { loggedInUser,logOutUser,updateLoader } = userSlice.actions

export default userSlice.reducer