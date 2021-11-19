import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncCredits, fetchAsyncMovie, fetchAsyncMovies, fetchAsyncSearch } from "./apiCalls";

const initialState = {
	movies: [],
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
		// A reducer that resets the selected movie state to an empty array
		// 	removeSelectedMovieOrShow: (state) => {
		// 		state.selectedMovieOrShow = [];
		// 	},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: (state) => {
			return { ...state, isFetching: true };
		},

		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			return { ...state, movies: payload, isFetching: false };
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

// export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getMovies = (state) => state.movies.movies;
export const getMovie = (state) => state.movies.movie;
export const getCredits = (state) => state.movies.credits;
export const getSearch = (state) => state.movies.search;
export const isFetching = (state) => state.movies.isFetching;
export const isError = (state) => state.movies.error;
export default moviesSlice.reducer;
