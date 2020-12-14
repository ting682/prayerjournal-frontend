export function signupReducer(state = { signupUser: {email: '', password: '', passwordConfirmation: '', name: '', bio: ''}, requesting: false}, action) {
    //debugger
    switch (action.type) {

        case 'CHANGE_EMAIL':
            //debugger
            return {
                ...state,
                signupUser: {
                    ...state.signupUser,
                    email: action.payload
                }
            }
        
        case 'CHANGE_PASSWORD':
           // debugger
            return {
                ...state,
                signupUser: {
                    ...state.signupUser,
                    password: action.payload
                }
            }
        
        case 'CHANGE_PASSWORD_CONFIRMATION':
           // debugger
            return {
                ...state,
                signupUser: {
                    ...state.signupUser,
                    passwordConfirmation: action.payload
                }
            }

        case 'CHANGE_NAME':
            // debugger
                return {
                    ...state,
                    signupUser: {
                        ...state.signupUser,
                        name: action.payload
                    }
                }
        
        case 'CHANGE_BIO':
            // debugger
                return {
                    ...state,
                    signupUser: {
                        ...state.signupUser,
                        bio: action.payload
                    }
                }
    
        case 'SIGNUP_CLEAR':

            return {
                ...state,
                signupUser: {
                    email: '',
                    password: '',
                    passwordConfirmation: ''
                }
            }
        
        
            


        default:
            return state
    }
}