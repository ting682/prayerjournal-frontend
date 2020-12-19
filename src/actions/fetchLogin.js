import { BASEURL } from './url'

export function fetchLogin(data, history) {
    return (dispatch) => {
        dispatch({type: 'LOGIN_REQUEST_STARTED'})
        
        return fetch(`${BASEURL}/api/v1/login`, {
            
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    email_address: data.email,
                    password: data.password

                }
            })
        })
        .then(resp => {
            if(resp.ok) {
                return resp.json()
            } else {
                dispatch({type: 'NEW_ALERT', payload: 'Email and password do not match records.'})
            }
        
        })
        .then(userData => {
            
            if(userData.error) {
                dispatch({type: 'NEW_ALERT', payload: 'Email and password do not match records.'})
            } else {
                dispatch({type: 'SET_CURRENT_USER', userData})
                history.push("/entries")
            }
            
            
        })
        .catch(error => {

        })
    }
}