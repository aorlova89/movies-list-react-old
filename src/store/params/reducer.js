const PARAMS_INITIAL_STATE = {
    query: '',
    searchBy: 'TITLE',
    limit: "10"
}

function reducer(state = PARAMS_INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_QUERY':
            return {...state, [action.payload.param]: action.payload.value};
        default:
            return state;
    }
}

export default reducer;
