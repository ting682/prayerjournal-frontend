

export function fetchComments() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_COMMENTS_REQUEST' });
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/comments`)
        .then(response => response.json())
        .then(comments => { 
            
            dispatch({ type: 'ADD_COMMENTS', comments: comments.data})
        })
    };
  }