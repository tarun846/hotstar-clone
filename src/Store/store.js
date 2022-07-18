import { configureStore ,createSlice  } from "@reduxjs/toolkit";
import userSlice from '../Container/CarouselSlice'
import movieAndTvSlice  from "../Container/movieandtvslice";

 const store = configureStore({
    reducer : {
      carousel : userSlice,
      movieandtv : movieAndTvSlice,
    }
 })

 export default store