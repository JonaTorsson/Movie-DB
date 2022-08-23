import { useQuery } from "react-query"
import TmDBAPI from "../services/TmDBAPI"

const usePopularMovies = () => {
    return useQuery('popularMovies', TmDBAPI.getPopularMovies)
}

export default usePopularMovies