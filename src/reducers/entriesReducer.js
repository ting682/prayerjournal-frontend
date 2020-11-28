export function entriesReducer(state = { entries: [], requesting: false}, action) {
    debugger
    switch (action.type) {
        case "START_ADDING_ENTRIES_REQUEST":
            return {
                ...state,
                entries: [...state.entries],
                requesting: true
            }
        case "ADD_ENTRIES":
            
            return {
                ...state,
                entries: action.entries,
                requesting: false
            }
        default:
            return state
    }
}

