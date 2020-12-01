export function fetchEntries() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_ENTRIES_REQUEST' });
      fetch('http://localhost:3000/api/v1/entries')
        .then(response => response.json())
        .then(entries => { 
            debugger
            dispatch({ type: 'ADD_ENTRIES', entries})


        })
    };
  }