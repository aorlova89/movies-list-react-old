import service from "../../services/search";
import {setMovies} from "./actions";

export function getMovies() {
    return function(dispatch, getState) {
        const {query, searchBy, limit} = getState().params;

        service.getMovies(query,
            searchBy.toLowerCase(),
            limit)
            .then(response => {
                dispatch(setMovies(response));
            })
            .catch();
    }
}
