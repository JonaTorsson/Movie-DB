import { Accordion, Button, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ActorInfo = ({ actor }) => {
	const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'

	return (
		<>
		<Col className="" xs={12} lg={6} xl={4}>
			<h1>{actor.name}</h1>
			<Card key={actor.id} className="mb-3">
				<Card.Img 
						variant="top" 
						src={BASE_URL_IMAGE + actor.profile_path}
					/>
				<Card.Body>
					<Card.Text> 
							<span className="fw-bold"> Born: </span>
							{actor.birthday}
					</Card.Text>
					<Card.Text>
						{actor.biography}
					</Card.Text>
					
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header>Click to see {actor.name}'s all features
								({actor.combined_credits.cast.length})
							</Accordion.Header>
							{actor.combined_credits.cast.map(movie => (
								<Accordion.Body key={movie.id}>
									<span className="fw-bold"> 
										{movie.name} 
									</span> in {movie.character} 
									<div>
									<Button 
										size="sm"
										as={Link}
										to={`/movie/${movie.id}`}
										variant="info">
										Read more
									</Button>
									</div>
								</Accordion.Body>
							))}
						</Accordion.Item>
					</Accordion>
				</Card.Body>
			</Card>
			</Col>
		</>
	)
}

export default ActorInfo