import { useQuery } from "react-query";
import TmDBAPI from "../services/TmDBAPI";

const useGenre = (page, genre_id) => {
    return useQuery(['movie-by-genre', {page, genre_id}], TmDBAPI.getGenre, {keepPreviousData: true})
}

export default useGenre

// import { useQuery } from 'react-query'
// import TmDBAPI from "../services/TmDBAPI"


// const useGenre = (id) => {
// 	return useQuery(['genre', id], () => TmDBAPI.getGenre(id))
// }

// export default useGenre