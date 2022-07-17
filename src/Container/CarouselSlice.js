import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { movieMarvelEndpoint } from '../api/api'

const initialState = {
    entities: [],
    loading: 'idle',
    error : null,
}

export  const fetchData = createAsyncThunk('data/fetchdata' , async () => {
try {
    const response = await axios.get(movieMarvelEndpoint)
    return response.data
} catch (error) {
    return error.message
}
})

const usersSlice = createSlice({
    name : 'carousel',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
         builder.addCase(fetchData.pending ,(state , action ) => {
            state.loading  = 'loading'
         } )
         .addCase(fetchData.fulfilled , (state , action) => {
             state.loading = 'suceeded';
             state.entities = action.payload;
         } )
         .addCase(fetchData.rejected , (state , action) => {
            state.loading = 'failed' ;
            state.error   =  action.error.message;
         }  )
    }
})

// export const apidata = (state) = state.entities
export const selectAllPosts = (state) => state.carousel;
export default usersSlice.reducer;