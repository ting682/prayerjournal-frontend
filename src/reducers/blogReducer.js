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

            entry = action.entry.data
            
            entryIndex = state.blog.entries.findIndex(entry => {
                return parseInt(entry.id) === parseInt(action.entry.data.id)
            })

            entries = [entry, ...state.blog.entries.slice(0, entryIndex), ...state.blog.entries.slice(entryIndex + 1)]

            blog = {...state.blog}

            blog.entries = entries

            return {
                ...state,
                blog: blog
            }
        
        case 'NEW_BLOG_ENTRY':

            entries = [action.payload.data, ...state.blog.entries]

            blog = {...state.blog}

            blog.entries = entries

            return {
                ...state,
                blog: blog
            }

        case 'DELETE_BLOG_ENTRY':

            entryIndex = state.blog.entries.findIndex(function (entry) {
                //debugger
                return parseInt(entry.id) === parseInt(action.payload.entryId)
            })

            blog = {...state.blog}

            
            entries = [...state.blog.entries.slice(0, entryIndex), ...state.blog.entries.slice(entryIndex + 1)]

            blog.entries = entries

            return {
                ...state,
                blog: blog,
                requesting: false
            }

        default:
            return state
    }

}