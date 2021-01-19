// import { BASEURL } from './url'

export function postPrayer(prayer) {
    return (dispatch) => {
      dispatch({ type: 'START_NEW_PRAYER' });
        //debugger
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/entries/${prayer.entry_id}/prayers`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`
        },

        body: JSON.stringify({
            prayer
        })
        })
        .then(response => response.json())
        .then(prayer => { 
            
            dispatch({ type: 'NEW_PRAYER', prayer})

            //history.push("/entries")
        })
    };
  }