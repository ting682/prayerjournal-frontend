import { BASEURL } from './url'

export function patchLike(likeId, like) {
    return (dispatch) => {
      dispatch({ type: 'START_PATCH_LIKE' });
        //debugger
      fetch(`${BASEURL}/api/v1/entries/${like.entry_id}/likes/${likeId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': `${BASEURL}`
        },

        body: JSON.stringify({
            like
        })
        })
        .then(response => response.json())
        .then(payload => { 
            
            dispatch({ type: 'PATCH_LIKE', payload})

            //history.push("/entries")
        })
    };
  }