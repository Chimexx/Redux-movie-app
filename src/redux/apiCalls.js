import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY } from "../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (page) => {
	const endpoint = `${POPULAR_BASE_URL}&page=${page}`;
	return await (await fetch(endpoint)).json();
});

export const fetchAsyncSearch = createAsyncThunk("movies/fetchAsyncSearch", async (searchTerm = "", page) => {
	const endpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${page}`;
	return await (await fetch(endpoint)).json();
});

export const fetchAsyncMovie = createAsyncThunk("movies/fetchAsyncMovie", async (movieId) => {
	const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
	return await (await fetch(endpoint)).json();
});

export const fetchAsyncCredits = createAsyncThunk("movies/fetchAsyncCredits", async (movieId) => {
	const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
	return await (await fetch(creditsEndpoint)).json();
});
