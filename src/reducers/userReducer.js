export function userReducer(state = { users: [], requesting: false}, action) {
    //debugger
    switch (action.type) {

        case "START_GET_USER_REQUEST":
            return {
                ...state,
                users: [],
                requesting: true
            }

        case "GET_USER":
            //debugger
            return {
                ...state,
                users: [...state.users, action.userData.data],
                requesting: false
            }

        default:
            return state
    
    }
        


}