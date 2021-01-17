

export function fetchBlog(blogId, history) {
    return (dispatch) => {
        
      dispatch({ type: 'START_REQUESTING_BLOG' });
        
      return fetch(`${process.env.REACT_APP_API_URL}/api/v1/blogs/${blogId}`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
        })
        .then(response => {
          //debugger
          if (response.ok) {
            return response.json()
          } else {
            dispatch({type: 'NEW_ALERT', payload: 'Please login'})
            dispatch({type: 'NEW_REQUEST', payload: `/series/${blogId}`})
            history.push('/login')
          }
          
        })
        .then(blog => { 
            // debugger
            dispatch({ type: 'GET_BLOG', payload: blog})


        }).catch(error => {
          //debugger
        })
    };
  }