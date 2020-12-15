import { BASEURL } from './url'

export function postLogout(history) {
    return (dispatch) => {
        dispatch({type: 'LOGOUT_STARTED'})
        //debugger
        return fetch(`${BASEURL}/api/v1/logout`, {
            
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': `${BASEURL}`
            }
        })
        .then(resp => {
            if (resp.ok) {
                history.push("/")
            }
        })
        
    }
}