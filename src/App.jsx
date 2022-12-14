import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import PopularMovies from './pages/PopularMovies'
import CurrentMoviesPage from './pages/CurrentMoviesPage'
import TopRatedMoviesPage from './pages/TopRatedMoviesPage'
import MovieInfoPage from './pages/MovieInfoPage'
import ActorInfoPage from './pages/ActorInfoPage'
import GenrePage from './pages/GenrePage'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/popular" element={<PopularMovies />} />
				<Route path="/current" element={<CurrentMoviesPage />} />
				<Route path="/top-rated" element={<TopRatedMoviesPage />} />
				<Route path="/movie/:id" element={<MovieInfoPage />} />
				<Route path="/actor/:id" element={<ActorInfoPage />} />
				<Route path="/genre" element={<GenrePage />} />
			</Routes>
		</div>
	)
}

export default App
