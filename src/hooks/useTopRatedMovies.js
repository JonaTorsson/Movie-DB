import { useQuery } from 'react-query'
import TmDBAPI from "../services/TmDBAPI"

const useTopRatedMovies = () => {
	return useQuery('topRated', TmDBAPI.getTopRatedMovies)
}

export default useTopRatedMovies