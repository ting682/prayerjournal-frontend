export function blogsReducer(state = { blogs: [], loaded: false, requesting: false}, action) {

    let entries;
    let tempDiv;
    let blogText;

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

        default:
            return state
    }
}