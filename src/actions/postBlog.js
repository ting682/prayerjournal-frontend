export function postBlog(blog) {
    return (dispatch) => {
      
    
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/blogs`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
            blog
        })
        })
        .then(response => response.json())
        .then(blog => { 
            //debugger
            dispatch({ type: 'NEW_BLOG', payload: blog})
            
        })
    };
  }