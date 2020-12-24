import { BASEURL } from './url'

export function postSignup(user, history) {
    return (dispatch) => {
        dispatch({type: 'SIGNUP_REQUEST_STARTED'})
        
        return fetch(`${BASEURL}/api/v1/signup`, {
            
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': `${BASEURL}`
            },
            body: JSON.stringify({
                user
            })
        })
        .then(resp => {

            if(resp.ok) {
                return resp.json()
            } else {
                dispatch({type: 'NEW_ALERT', payload: 'Signup did was not successful'})
            }
        })
        .then(userData => {
            
            //debugger
            if (userData.error !== undefined) {
                dispatch({type: 'NEW_ALERT', payload: userData.error})
            } else {
                dispatch({type: 'NEW_ALERT', payload: "Signup successful!"})
                dispatch({type: 'SET_CURRENT_USER', userData})
                history.push("/entries")
            }
            
            
        })
        .catch(error => {
            debugger
        })
    }
}