export function verseReducer(state = { verse: [], requesting: false}, action) {

    switch(action.type) {

        case 'NEW_VERSE':
            //debugger
            return {
                ...state,
                verse: [action.payload],
                requesting: false
            }

        case 'REQUESTING_VERSE':
            return {
                ...state,
                verse: [],
                requesting: true
            }

        default:
            return state
    }
}