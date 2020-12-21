import { BASEURL } from './url'

export function editEntry(data) {
    return (dispatch) => {
      dispatch({ type: 'START_EDIT_ENTRY' });
        //debugger
      fetch(`${BASEURL}/api/v1/entries/${data.entry.entry_id}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': `${BASEURL}`
        },

        body: JSON.stringify({
            entry: {
                content: data.entry.content,
                user_id: data.entry.user_id
            }
        })
        })
        .then(response => response.json())
        .then(entry => { 
            //debugger
            dispatch({ type: 'EDIT_ENTRY', entry})
            //dispatch({ type: 'ADD_ENTRIES', entries})

            //history.push("/entries")
        })
    };
  }