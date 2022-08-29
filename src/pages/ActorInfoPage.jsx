import Container from 'react-bootstrap/Container'
import useActor from "../hooks/useActor"
import ActorInfo from '../components/ActorInfo'
import { useParams } from 'react-router-dom'

const ActorInfoPage = () => {
	const { id } = useParams()
	const { data, isError, error, isLoading } = useActor(id)

	return (
		<Container className="py-4 text-center">

			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
					<ActorInfo actor={data.data} />
				</>
			)}

		</Container>
	)
}

export default ActorInfoPage