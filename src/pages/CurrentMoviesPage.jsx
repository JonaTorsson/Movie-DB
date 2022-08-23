import { Container } from "react-bootstrap"
import useCurrentMovies from "../hooks/useCurrentMovies"
import InfoCardMovie from "../components/InfoCardMovie"

const CurrentMoviesPage = () => {
	const { data, isLoading, isError, error } = useCurrentMovies()

	return (
		<Container className="py-4 text-center">

			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
					<h1>Current Movies Playing</h1>
					<InfoCardMovie movies={data} /> 
				</>
			)}

		</Container>
	)
}

export default CurrentMoviesPage