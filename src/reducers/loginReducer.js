export function loginReducer(state = { currentUser: [], requesting: false}, action) {
    //debugger
    switch (action.type) {
        case "LOGIN_REQUEST_STARTED":
            return {
                ...state,
                currentUser: [],
                requesting: true
            }
        
        case "SET_CURRENT_USER":
            //debugger
            return {
                currentUser: action.userData.user.data,
                requesting: false
            }

        default:
            return state
    
    }
        


}
