import { createSlice } from "@reduxjs/toolkit";
// import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY } from "../config";

// export const fetchMovies = createAsyncThunk("movies/fetchAsyncMovies", async (searchTerm, page) => {
// 	// console.log(page);
// 	const endpoint = `${POPULAR_BASE_URL}&page=${page}`;

// 	// const endpoint = searchTerm
// 	// 	? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
// 	// 	: `${POPULAR_BASE_URL}&page=${page}`;

// 	const response = await fetch(endpoint);
// 	const movies = await response.json();

// 	return movies;
// });

// export const fetchMovie = createAsyncThunk("movies/fetchAsyncMovie", async (movieId) => {
// 	const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
// 	return await (await fetch(endpoint)).json();
// });

// export const fetchCredits = createAsyncThunk("movies/fetchAsyncCredits", async (movieId) => {
// 	const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
// 	return await (await fetch(creditsEndpoint)).json();
// });
const initialState = {
	movies: [],
	movie: [],
	credits: [],

	isfetching: false,
};

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		// A reducer that resets the selected movie state to an empty array
		removeDetails: (state) => {
			state.credits = [];
			state.movie = [];
			state.movies = [];
		},
	},
	extraReducers: {
		[fetchMovies.pending]: (state) => {
			console.log("pending");
			return { ...state, isfetching: true };
		},

		[fetchMovies.fulfilled]: (state, { payload }) => {
			console.log("fulfilled");
			return { ...state, movies: payload };
		},
		[fetchMovies.rejected]: () => {
			console.log("rejected");
		},

		[fetchMovie.fulfilled]: (state, { payload }) => {
			console.log("fulfilled");
			return { ...state, movie: payload };
		},
		[fetchCredits.fulfilled]: (state, { payload }) => {
			console.log("fulfilled");
			return { ...state, credits: payload };
		},
		[fetchCredits.fulfilled]: (state, { payload }) => {
			console.log("fulfilled");
			return { ...state, credits: payload };
		},
	},
});

export const { removeDetails } = movieSlice.actions;
export const getMovies = (state) => state.movies.movies;
export const getMovie = (state) => state.movies.movie;
export const getCredits = (state) => state.movies.credits;
export default movieSlice.reducer;
