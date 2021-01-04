
export function postSearchBible(searchTerm, bibleVersion) {
    
    return (dispatch) => {
      dispatch({ type: 'START_REQUEST_BIBLE_SEARCH' });
        //debugger
      fetch(`https://api.scripture.api.bible/v1/bibles/${bibleVersion}/search?query=${searchTerm}&limit=50&sort=relevance`, {
        
        method: "GET",
        headers: {
            'api-key': '3adcd0e3924f6be49af85be2ff69384f',
            "Content-Type": "application/json"

        }
        })
        .then(response => response.json())
        .then(results => { 
            //debugger
            dispatch({ type: 'GET_BIBLE_SEARCH_RESULTS', payload: results.data})
        })
    };
  }