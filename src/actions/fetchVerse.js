export function fetchVerse() {
    return (dispatch) => {
        dispatch({type: 'REQUESTING_VERSE'})
        // fetch('https://beta.ourmanna.com/api/v1/get/?format=json&order=random')
        fetch('https://beta.ourmanna.com/api/v1/get/?format=json')
        .then(resp => resp.json())
        .then(data => {
            //debugger
            dispatch({
                type: 'NEW_VERSE', 
                payload: data.verse.details
            })
        })
    }
}