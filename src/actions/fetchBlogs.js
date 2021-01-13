

export function fetchBlogs(history) {
    return (dispatch) => {
        
      dispatch({ type: 'START_ADDING_BLOGS_REQUEST' });
        
      return fetch(`${process.env.REACT_APP_API_URL}/api/v1/blogs`, {
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
            dispatch({type: 'NEW_REQUEST', payload: '/blogs'})
            history.push('/login')
          }
          
        })
        .then(blogs => { 
            //debugger
            dispatch({ type: 'GET_BLOGS', blogs})


        }).catch(error => {
          //debugger
        })
    };
  }