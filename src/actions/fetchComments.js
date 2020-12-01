export function fetchComments() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_COMMENTS_REQUEST' });
      fetch('http://localhost:3000/api/v1/comments')
        .then(response => response.json())
        .then(comments => { 
            
            dispatch({ type: 'ADD_COMMENTS', comments: comments.data})
        })
    };
  }