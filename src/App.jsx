import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import PopularMovies from './pages/PopularMovies'
import CurrentMoviesPage from './pages/CurrentMoviesPage'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/popular" element={<PopularMovies />} />
				<Route path="/current" element={<CurrentMoviesPage />} />
			</Routes>
		</div>
	)
}

export default App
