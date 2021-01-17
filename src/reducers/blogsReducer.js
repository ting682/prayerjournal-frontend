export function blogsReducer(state = { blogs: [], loaded: false, requesting: false}, action) {

    let entries;
    let tempDiv;
    let blogText;
    let blog;
    // let blogs;
    let blogIndex;
    let oldBlog;

    switch(action.type) {

        case 'START_REQUEST_BLOGS':
            return {
                ...state,
                requesting: true
            }
        
        case 'GET_BLOGS':
            // debugger

            let blogsData = []

            for (const blog of action.payload.data) {

                //debugger

                entries = [];
                

                tempDiv = document.createElement('div')
                tempDiv.innerHTML = blog.attributes.description
                blogText = tempDiv.textContent.toLowerCase()

                for(const includedData of action.payload.included) {
                    if (includedData.type === 'entry' && includedData.attributes.blog_id === parseInt(blog.id)) {
                        
                        entries.push(includedData)
                    } 
                }

                blogsData.push(Object.assign(blog, { entries: entries, blogText: blogText} ))
            }
            return {
                ...state,
                blogs: blogsData,
                loaded: true,
                requesting: false
            }

        case 'EDIT_BLOG':
            

            blogIndex = state.blogs.findIndex(function (blog) {
                // debugger
                return parseInt(blog.id) === parseInt(action.blog.data.id)
            })

            oldBlog = state.blogs.find(function(blog) {
                return parseInt(blog.id) === parseInt(action.blog.data.id)
            })

            blog = action.blog.data

            tempDiv = document.createElement('div')
            tempDiv.innerHTML = blog.attributes.description
            blogText = tempDiv.textContent.toLowerCase()

            entries = oldBlog.entries;

            Object.assign(blog, { entries: entries } )
            
            return {
                ...state,
                blogs: [blog, ...state.blogs.slice(0, blogIndex), ...state.blogs.slice(blogIndex + 1)]
            }

        default:
            return state
    }
}