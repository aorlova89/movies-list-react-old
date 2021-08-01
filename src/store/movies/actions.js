const SET_MOVIES = "SET_MOVIES";

export function setMovies(movies) {
    return { type: SET_MOVIES, payload: {movies}};
}
