export function setParam(param, value) {
    return { type: 'SET_QUERY', payload: { param, value }};
}
