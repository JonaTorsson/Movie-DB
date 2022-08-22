import axios from 'axios'


const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const getPopularMovies = async () => {
	const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&region=US`)
	return res.data.results
}

const getCurrentMovies = async () => {
	const res = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
	return res.data.results
}

export default {
	getPopularMovies,
	getCurrentMovies,

}