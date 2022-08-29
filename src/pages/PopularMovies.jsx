import {Container, Col} from 'react-bootstrap'
import usePopularMovies from "../hooks/usePopularMovies"
import InfoCardMovie from '../components/InfoCardMovie'

const PopularMovies = () => {
	const { data, isError, error, isLoading } = usePopularMovies()

	return (
		<Container className="py-4 text-center d-flex justify-content-center">
			<Col xs={12} md={10}>
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
					<h1>Popular movies</h1>
					<InfoCardMovie movies={data} /> 
				</>
			)}
			</Col>
		</Container>
	)
}

export default PopularMovies