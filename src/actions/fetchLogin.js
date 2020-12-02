export function fetchLogin(data) {
    return (dispatch) => {
        dispatch({type: 'FETCH_REQUEST_STARTED'})

        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                user: {
                    email: data.email,
                    password: data.password

                }
            })
        })
        .then(resp => resp.json())
        .then(userData => {
            debugger
        })
    }
}