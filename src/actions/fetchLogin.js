

export function fetchLogin(data, history) {
    return (dispatch) => {
        dispatch({type: 'LOGIN_REQUEST_STARTED'})
        
        return fetch('http://localhost:3000/api/v1/login', {
            
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
        .then(resp => resp.json())
        .then(userData => {
            
            //debugger
            dispatch({type: 'SET_CURRENT_USER', userData})
            history.push("/entries")
            
        })
    }
}