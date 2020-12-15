import { BASEURL } from './url'

export function postSignup(user, history) {
    return (dispatch) => {
        dispatch({type: 'SIGNUP_REQUEST_STARTED'})
        
        return fetch(`${BASEURL}/api/v1/signup`, {
            
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user
            })
        })
        .then(resp => resp.json())
        .then(userData => {
            
            //debugger
            dispatch({type: 'SET_CURRENT_USER', userData})
            history.push("/entries")
            
        })
    }
}