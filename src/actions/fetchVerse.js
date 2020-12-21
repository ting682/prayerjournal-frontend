export function fetchVerse() {
    return (dispatch) => {
        dispatch({type: 'REQUESTING_VERSE'})
        fetch('https://beta.ourmanna.com/api/v1/get/?format=json')
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: 'NEW_VERSE', 
                payload: data
            })
        })
    }
}