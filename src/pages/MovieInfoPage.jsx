import Container from 'react-bootstrap/Container'
import useMovie from "../hooks/useMovie"
import MovieInfo from '../components/MovieInfo'
import { useParams } from 'react-router-dom'

const PopularMovies = () => {
	const { id } = useParams()
	const { data, isError, error, isLoading } = useMovie(id)

	return (
		<Container className="py-4 text-center">

			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
					<MovieInfo movie={data.data} />
				</>
			)}

		</Container>
	)
}

export default PopularMovies