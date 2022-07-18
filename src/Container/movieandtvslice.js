import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  tvNewDisneyEndpoint,
  tvOriginalDisneyEndpoint,
  movieMarvelEndpoint,
  moviePopularDisneyEndpoint,
  movieUpcomingDisneyEndpoint,
  movieIndonesiaEndpoint,
  allTrending,
} from "../api/api";

const endpoints = [
  tvNewDisneyEndpoint,
  tvOriginalDisneyEndpoint,
  movieMarvelEndpoint,
  moviePopularDisneyEndpoint,
  movieUpcomingDisneyEndpoint,
  movieIndonesiaEndpoint,
  allTrending,
];

export const getMovieAndTv = createAsyncThunk(
  "movieAndTv/getMovieAndTv",
  async () => {
    try {
      const request = await endpoints.map((endpoint) => axios.get(endpoint));
      const responses = await axios.all(request);
      const jsonData = await axios.all(
        responses.map((response) => response)
      );
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  }
);

const   initialState = {
    data: [],
    status: "idle",
    error: null,
  }
export const movieAndTvSlice = createSlice({
   name: "movieAndTv",
   initialState,
  reducers: {},
  extraReducers: {
    [getMovieAndTv.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMovieAndTv.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = state.data.concat(action.payload);
    },
    [getMovieAndTv.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const selectAllMovieAndTv = (state) => state.movieAndTv.data;

export default movieAndTvSlice.reducer;