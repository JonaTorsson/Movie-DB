import axios from 'axios'


const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const getPopularMovies = async () => {
	return await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
}

const getCurrentMovies = async () => {
	return await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
}

const getTopRatedMovies = async () => {
	return await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
}

const getActor = async (id) => {
	return await axios.get(`${BASE_URL}/person/${id}?api_key=${API_KEY}&append_to_response=combined_credits`)
}

const getMovie = async (id) => {
	 return await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,similar`)
}

const getGenre = async ({queryKey}) => {
	const [_key, { page, genre_id }] = queryKey
	const res = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&popularity.desc&with_genres=${genre_id}&include_adult=false&page=${page}`)
	return res.data
}

const getGenres = async () => {
	const res = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
	return res.data
}

export default {
	getPopularMovies,
	getCurrentMovies,
	getTopRatedMovies,
	getActor,
	getMovie,
	getGenres,
	getGenre,
}