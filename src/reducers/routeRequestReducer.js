export function routeRequestReducer(state = { routeRequest: []}, action) {

    switch(action.type) {

        case 'NEW_REQUEST':
            //debugger
            return {
                ...state,
                routeRequest: action.payload
            }

        case 'CLEAR_REQUEST':
            return {
                ...state,
                routeRequest: ''
            }

        default:
            return state
    }
}