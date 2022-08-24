import { Container } from "react-bootstrap"
import InfoCardMovie from "../components/InfoCardMovie"
import useTopRatedMovies from "../hooks/useTopRatedMovies"

const TopRatedMoviesPage = () => {
	const { data, isLoading, isError, error } = useTopRatedMovies()

	return (
		<Container className="py-4 text-center">

			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
					<h1>Top Rated Movies</h1>
					<InfoCardMovie movies={data} /> 
				</>
			)}

		</Container>
	)
}

export default TopRatedMoviesPage