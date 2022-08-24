import { Col, Row, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const InfoCardMovie = ({ movies }) => {
	const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'
	
	return (
		<Row>
			{movies.data.results.map(movie => 
			<Col key={movie.id} xs={12} lg={6} xl={4}>
				<Card key={movie.id} className="mb-3">
					<Card.Img 
						className="" 
						variant="top" 
						src={BASE_URL_IMAGE + movie.poster_path}
					/>
					<Card.Body>
						<Card.Title> {movie.title} </Card.Title>
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
				</Col>
			)}
		</Row>
	)
}

export default InfoCardMovie