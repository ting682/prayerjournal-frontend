// import { BASEURL } from './url'

export function postLogout(history) {
    return (dispatch) => {
        dispatch({type: 'LOGOUT_STARTED'})
        //debugger
        return fetch(`${process.env.REACT_APP_API_URL}/api/v1/logout`, {
            
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`
            }
        })
        .then(resp => {
            if (resp.ok) {
                dispatch({type: 'LOGGED_OUT'})
                dispatch({type: 'NEW_ALERT', payload: 'Logged out successfully.'})
                history.push("/")
            }
        })
        
    }
}