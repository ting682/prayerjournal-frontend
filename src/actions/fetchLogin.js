import { BASEURL } from './url'

export function fetchLogin(data, history) {
    return (dispatch) => {
        dispatch({type: 'LOGIN_REQUEST_STARTED'})
        
        return fetch(`${BASEURL}/api/v1/login`, {
            
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': `${BASEURL}`
            },
            body: JSON.stringify({
                user: {
                    email_address: data.email,
                    password: data.password

                }
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