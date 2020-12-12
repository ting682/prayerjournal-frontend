export function patchLike(likeId, like) {
    return (dispatch) => {
      dispatch({ type: 'START_PATCH_LIKE' });
        //debugger
      fetch(`http://localhost:3000/api/v1/entries/${like.entry_id}/likes/${likeId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3001'
        },

        body: JSON.stringify({
            like
        })
        })
        .then(response => response.json())
        .then(like => { 
            
            dispatch({ type: 'PATCH_LIKE', like})

            //history.push("/entries")
        })
    };
  }