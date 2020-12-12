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
