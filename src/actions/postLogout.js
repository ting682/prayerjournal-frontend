export function postLogout(history) {
    return (dispatch) => {
        dispatch({type: 'LOGOUT_STARTED'})
        debugger
        return fetch('http://localhost:3000/api/v1/logout', {
            
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            if (resp.ok) {
                history.push("/")
            }
        })
        
    }
}