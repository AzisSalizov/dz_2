const initialState = {
    characters: [],
    filter: 'ALL'
}

export const marvelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return {...state , characters: action.payload};
        case 'SET_FILTER':
            return {...state , filter: action.payload};
        default:
            return state;
    }
}