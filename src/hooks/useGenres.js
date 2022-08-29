import { useQuery } from "react-query";
import TmDBAPI from "../services/TmDBAPI";

const useGenres = () => {
    return useQuery('movie-genre-list', TmDBAPI.getGenres)
}

export default useGenres