export function loginReducer(state = { currentUser: [], requesting: false}, action) {
    //debugger
    switch (action.type) {

        case "START_GET_CURRENT_USER_REQUEST":
            return {
                ...state,
                currentUser: [],
                requesting: true
            }

        case "LOGIN_REQUEST_STARTED":
            return {
                ...state,
                currentUser: [],
                requesting: true
            }
        
        case "SET_CURRENT_USER":
            //debugger
            return {
                currentUser: action.userData.data,
                requesting: false
            }

        default:
            return state
    
    }
        


}