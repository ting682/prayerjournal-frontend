export function editBlog(blog, blogId) {
    return (dispatch) => {
      dispatch({ type: 'START_EDIT_BLOG' });
    //   debugger
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/blogs/${blogId}`, {
        credentials: "include",
        method: "PATCH",
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
            dispatch({ type: 'EDIT_blog', blog})
            
        })
    };
  }