export function alertsReducer(state = { alert: [], display: false}, action) {

    switch(action.type) {

        case 'NEW_ALERT':

            return {
                ...state,
                alert: [action.payload],
                display: true
            }

        case 'CLOSE_ALERT':
            return {
                ...state,
                alert: [],
                display: false
            }

        default:
            return state
    }
}