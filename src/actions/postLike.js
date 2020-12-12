export function postEntry(data) {
    return (dispatch) => {
      dispatch({ type: 'START_NEW_LIKE' });
        //debugger
      fetch('http://localhost:3000/api/v1/likes', {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3001'
        },

        body: JSON.stringify({
            like: {
                entry_id: data.entry_id,
                user_id: data.user_id
            }
        })
        })
        .then(response => response.json())
        .then(like => { 
            
            dispatch({ type: 'NEW_LIKE', like})

            //history.push("/entries")
        })
    };
  }