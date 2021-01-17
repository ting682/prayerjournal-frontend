export function blogReducer(state = { blog: [], requesting: false, loaded: false}, action) {

    let blog;
    let tempDiv;
    let entries;
    let blogText;
    let entry;
    let entryIndex;

    switch(action.type) {

        case 'START_REQUESTING_BLOG':

            return {
                ...state,
                requesting: true
            }

        case 'GET_BLOG':
            // debugger
            blog = action.payload.data

            tempDiv = document.createElement('div')
            tempDiv.innerHTML = blog.attributes.description
            blogText = tempDiv.textContent.toLowerCase()

            entries = []

            for(const includedData of action.payload.included) {
                // debugger
                if (includedData.type === 'entry' && includedData.attributes.blog_id === parseInt(blog.id)) {
                    
                    entries.push(includedData)
                } 
            }

            Object.assign(blog, { entries: entries, blogText: blogText} )

            // debugger

            return {
                ...state,
                blog: blog,
                requesting: false,
                loaded: true
            }

        case 'EDIT_BLOG_ENTRY': 

            entry = action.payload

            entryIndex = state.blog.blog.entries.findIndex(entry => {
                return parseInt(entry.id) === parseInt(action.payload.id)
            })

            entries = [entry, ...state.entries.slice(0, entryIndex), ...state.entries.slice(entryIndex + 1)]

            blog = [...state.blog]

            blog.entries = entries

            return {
                ...state,
                blog: blog
            }
        
        default:
            return state
    }

}