import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../common/apis/MovieApi";
import { API_KEY } from "../common/apis/MovieApiKey";

// const movieSearch = "fast";
// const seriesSearch = "evil";
export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (searchWord) => {
	const res = await MovieApi.get(`?apikey=${API_KEY}&s=${searchWord}&type=movie`);
	console.log(res);
	return res.data;
});
export const fetchAsyncShows = createAsyncThunk("shows/fetchAsyncShows", async (searchWord) => {
	const res = await MovieApi.get(`?apikey=${API_KEY}&s=${searchWord}&type=series`);
	console.log(res);
	return res.data;
});
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
	"movies/fetchAsyncMovieOrShowDetail",
	async (id) => {
		const res = await MovieApi.get(`?apikey=${API_KEY}&i=${id}&Plot=full`);
		console.log(res);
		return res.data;
	}
);

const initialState = {
	movies: [],
	shows: [],
	selectedMovieOrShow: [],
};

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		// A reducer that resets the selected movie state to an empty array
		removeSelectedMovieOrShow: (state) => {
			state.selectedMovieOrShow = [];
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log("pending");
		},

		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log("fulfilled");
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log("rejected");
		},

		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			console.log("fulfilled");
			return { ...state, shows: payload };
		},
		[fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
			console.log("fulfilled");
			return { ...state, selectedMovieOrShow: payload };
		},
	},
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
