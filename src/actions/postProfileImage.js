export function postProfileImage(imageUrl) {
    return (dispatch) => {
      dispatch({ type: 'START_NEW_PROFILE_IMAGE' });
        //debugger
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/entries/${like.entry_id}/likes`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`
        },

        body: JSON.stringify({
            like
        })
        })
        .then(response => response.json())
        .then(like => { 
            
            dispatch({ type: 'NEW_LIKE', like})

            //history.push("/entries")
        })
    };
  }