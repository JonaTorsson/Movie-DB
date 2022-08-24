import { useQuery } from 'react-query'
import TmDBAPI from "../services/TmDBAPI"


const useMovie = (id) => {
	return useQuery(['movie', id], () => TmDBAPI.getMovie(id))
}

export default useMovie