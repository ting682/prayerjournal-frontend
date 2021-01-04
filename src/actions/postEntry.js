// import { BASEURL } from './url'

export function postEntry(data) {
    return (dispatch) => {
      dispatch({ type: 'START_NEW_ENTRY' });
        //debugger
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/entries`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`
        },

        body: JSON.stringify({
            entry: {
                content: data.content,
                user_id: data.user_id,
                public: data.public
            }
        })
        })
        .then(response => response.json())
        .then(entry => { 
          //debugger
          if (entry.errors) {
            //debugger
            dispatch({ type: 'NEW_ALERT', payload: entry.errors})
          } else {
            dispatch({ type: 'NEW_ENTRY', entry})
          }
            

            //history.push("/entries")
        })
    };
  }