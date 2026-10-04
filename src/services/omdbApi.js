const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(searchText) {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=${searchText}`;

    const response = await fetch(url);

    const data = await response.json();

    if (data.Response === "False") {
        return [];
    }

    return data.Search;
}

export async function getMovieDetails(movieId) {
    const url = `${BASE_URL}?apikey=${API_KEY}&i=${movieId}`;

    const response = await fetch(url);

    const data = await response.json();

    if (data.Response === "False") {
        return null;
    }

    return data;
}