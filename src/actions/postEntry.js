export function postEntry(data, history) {
    return (dispatch) => {
      dispatch({ type: 'START_NEW_ENTRY' });

      fetch('http://localhost:3000/api/v1/entries', {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3001'
        }
        })
        .then(response => response.json())
        .then(entries => { 
            //debugger
            dispatch({ type: 'ADD_ENTRIES', entries})


        })
    };
  }