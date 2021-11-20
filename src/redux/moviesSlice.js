import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncCredits, fetchAsyncMovie, fetchAsyncMovies, fetchAsyncSearch } from "./apiCalls";

const initialState = {
	allMovies: [],
	credits: [],
	movie: [],
	search: [],
	isFetching: true,
	error: false,
};

const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		//reducers here
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: (state) => {
			return { ...state, isFetching: true };
		},

		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			return { ...state, allMovies: payload, isFetching: false };
		},
		[fetchAsyncMovies.rejected]: (state) => {
			return { ...state, error: true, isFetching: false };
		},
		[fetchAsyncMovie.fulfilled]: (state, { payload }) => {
			return { ...state, movie: payload, isFetching: false };
		},

		[fetchAsyncCredits.fulfilled]: (state, { payload }) => {
			return { ...state, credits: payload, isFetching: false };
		},
		[fetchAsyncSearch.fulfilled]: (state, { payload }) => {
			return { ...state, search: payload, isFetching: false };
		},
	},
});

export const getState = (state) => state.movies;
export default moviesSlice.reducer;
