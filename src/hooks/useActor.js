import { useQuery } from "react-query"
import TmDBAPI from "../services/TmDBAPI"

const useActor = (id) => {
	return useQuery(['actor', id], () => TmDBAPI.getActor(id))
}

export default useActor