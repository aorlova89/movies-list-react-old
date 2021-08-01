function reducer(state = [], action) {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload.movies;
        default:
            return state;
    }
}

export default reducer;
