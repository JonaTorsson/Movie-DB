import { useQuery } from 'react-query'
import TmDBAPI from "../services/TmDBAPI"


const useCurrentMovies = () => {
	return useQuery('currentMovies', TmDBAPI.getCurrentMovies)
}

export default useCurrentMovies