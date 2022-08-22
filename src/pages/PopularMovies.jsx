import Container from 'react-bootstrap/Container'
import usePopularMovies from "../hooks/usePopularMovies"
import InfoCardMovie from '../components/InfoCardMovie'

const PopularMovies = () => {
	const { data: popularMovies, isError, error, isLoading } = usePopularMovies()

	return (
		<Container className="py-4 text-center">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{popularMovies && (
				<>
					<h1>Popular movies</h1>
					<InfoCardMovie movies={popularMovies} /> 
				</>
			)}

		</Container>
	)
}

export default PopularMovies