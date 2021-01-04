export function bibleSearchReducer(state = { bibleSearch: [], resultTotal: 0, requesting: false}, action) {

    switch(action.type) {

        case 'START_REQUEST_BIBLE_SEARCH':
            return {
                ...state,
                requesting: true
            }
        
        case 'GET_BIBLE_SEARCH_RESULTS':
            //debugger
            return {
                ...state,
                bibleSearch: action.payload.verses,
                resultTotal: action.payload.total,
                requesting: false
            }

        default:
            return state
    }
}