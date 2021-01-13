export function blogsReducer(state = { blogs: [], loaded: false, requesting: false}, action) {

    switch(action.type) {

        case 'START_REQUEST_BLOGS':
            return {
                ...state,
                requesting: true
            }
        
        case 'GET_BLOGS':
            //debugger
            return {
                ...state,
                blogs: action.payload.blogs,
                loaded: true,
                requesting: false
            }

        default:
            return state
    }
}