import { Col, Row, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import usePopularMovies from "../hooks/usePopularMovies"

const InfoCardMovie = () => {
	const { data: popularMovies } = usePopularMovies()

	const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'
	
	return (
		<Row>
			<Col sm="12" md="6" lg="4">
				{popularMovies.map((movie) => (
					<Card key={movie.id} className="mb-3">
						<Card.Img 
							className="" 
							variant="top" 
							src={BASE_URL_IMAGE + movie.poster_path}
						/>
						<Card.Body>
							<Card.Title> {movie.original_title} </Card.Title>
							<Card.Text> 
									<span className="fw-bold"> Average score: </span>  {movie.vote_average}
							</Card.Text>
							<Button 
								as={Link}
								to={`/movie/${movie.id}`}
								variant="info">
								Read more
							</Button>
						</Card.Body>
					</Card>
				))}
			</Col>
		</Row>
	)
}

export default InfoCardMovie