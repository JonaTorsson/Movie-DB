import { Accordion, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const MovieInfo = ({ movie }) => {
	const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'
	return (
		<>
			<h1>{movie.title}</h1>
			<Card key={movie.id} className="mb-3">
				<Card.Img 
						variant="top" 
						src={BASE_URL_IMAGE + movie.poster_path} 
					/>
				<Card.Body>
					<Card.Text> 
							<span className="fw-bold"> Released: </span>
							{movie.release_date}
					</Card.Text>
					<Card.Text>
						<span className="fw-bold"> Rating: </span>
						{movie.vote_average}
					</Card.Text>
					<Card.Text>
						<span className="fw-bold"> Runtime: </span>
						{Math.floor(movie.runtime / 60)}h, {movie.runtime % 60}min
					</Card.Text>
					<Card.Text>
						<span className="fw-bold"> Genres: </span>
						{movie.genres.map(genre => (genre.name)).join(", ")}
					</Card.Text>
					
					<Card.Text>
						{movie.overview} 
					</Card.Text>
					
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header>Click to see all actors appearing in the movie
								({movie.credits.cast.length})
							</Accordion.Header>
							{movie.credits.cast.map(actor => (
								<Accordion.Body key={actor.id}>
									<span className="fw-bold"> 
										{actor.name} 
									</span> as {actor.character} 
									<div>
									<Button 
										size="sm"
										as={Link}
										to={`/actor/${actor.id}`}
										variant="info">
										Read more
									</Button>
									</div>
								</Accordion.Body>
							))}
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Click to see similar movies 
							</Accordion.Header>
							{movie.similar.results.map(similarMovie => (
								<Accordion.Body key={similarMovie.id} 
									className="d-flex justify-content-between">
									<span className="fw-bold"> 
										{similarMovie.title} 
									</span> 
									
									<Button 
										size="sm"
										as={Link}
										to={`/movie/${similarMovie.id}`}
										variant="info">
										Read more
									</Button>
									
								</Accordion.Body>
							))}
						</Accordion.Item>
					</Accordion>
				</Card.Body>
			</Card>
		</>
	)
}

export default MovieInfo