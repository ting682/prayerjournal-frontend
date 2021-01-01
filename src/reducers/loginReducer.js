export function loginReducer(state = { currentUser: [], requesting: false, loggingOut: false}, action) {
    //debugger
    switch (action.type) {

        case "START_GET_CURRENT_USER_REQUEST":
            return {
                ...state,
                currentUser: {id: 0},
                requesting: true
            }

        case "LOGIN_REQUEST_STARTED":
            return {
                ...state,
                currentUser: [],
                requesting: true
            }
        
        case "LOGOUT_STARTED":
            return {
                ...state,
                currentUser: [],
                requesting: true,
                loggingOut: true
            }
        case "LOGGED_OUT":
            return {
                ...state,
                currentUser: [],
                requesting: true,
                loggingOut: false
            }
        case "START_EDIT_PROFILE":
            return {
                ...state,
                currentUser: [],
                requesting: true
            }
        
        case "EDIT_PROFILE":
            //debugger
            return {
                ...state,
                currentUser: action.payload.data,
                requesting: true
            }

        case "GET_CURRENT_USER":
            //debugger
            return {
                currentUser: action.userData.data,
                requesting: false
            }
        
        case "SET_CURRENT_USER":
            //debugger
            return {
                currentUser: action.userData.user.data,
                requesting: false
            }

        case 'SIGNUP_REQUEST_STARTED':

            return {
                currentUser: [],
                requesting: true
            }
        default:
            return state
    
    }
        


}
