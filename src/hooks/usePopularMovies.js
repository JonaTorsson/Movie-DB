import { useQuery } from "react-query"
import TmDBAPI from "../services/TmDBAPI"

const usePopularMovies = () => {
    return useQuery('movie-popular', TmDBAPI.getPopularMovies, {keepPreviousData: true})
}

export default usePopularMovies