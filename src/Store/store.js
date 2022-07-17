import { configureStore ,createSlice  } from "@reduxjs/toolkit";
import userSlice from '../Container/CarouselSlice'

 const store = configureStore({
    reducer : {
      carousel : userSlice,
    }
 })

 export default store