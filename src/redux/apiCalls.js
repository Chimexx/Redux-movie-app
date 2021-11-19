import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY } from "../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (searchTerm, page) => {
// 	console.log(searchTerm);
// 	console.log(page);
// 	try {
// 		let endpoint = "";

// 		if (searchTerm.length > 0) {
// 			endpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${page}`;
// 		} else {
// 			endpoint = `${POPULAR_BASE_URL}&page=${page}`;
// 		}
// 		return await (await fetch(endpoint)).json();
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (page) => {
	try {
		const endpoint = `${POPULAR_BASE_URL}&page=${page}`;
		return await (await fetch(endpoint)).json();
	} catch (error) {
		console.log(error);
	}
});
export const fetchAsyncSearch = createAsyncThunk(
	"movies/fetchAsyncSearch",
	async (searchTerm = null, page) => {
		try {
			const endpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${page}`;
			console.log(searchTerm);
			console.log(page);
			return await (await fetch(endpoint)).json();
		} catch (error) {
			console.log(error);
		}
	}
);

export const fetchAsyncMovie = createAsyncThunk("movies/fetchAsyncMovie", async (movieId) => {
	try {
		const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
		return await (await fetch(endpoint)).json();
	} catch (error) {
		console.log(error);
	}
});

export const fetchAsyncCredits = createAsyncThunk("movies/fetchAsyncCredits", async (movieId) => {
	try {
		const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
		return await (await fetch(creditsEndpoint)).json();
	} catch (error) {
		console.log(error);
	}
});

// export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
// 	"movies/fetchAsyncMovieOrShowDetail",
// 	async (id) => {
// 		const res = await MovieApi.get(`?apikey=${API_KEY}&i=${id}&Plot=full`);
// 		console.log(res);
// 		return res.data;
// 	}
// );
