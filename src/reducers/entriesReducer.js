export function entriesReducer(state = { entries: [], requesting: false}, action) {
    //debugger
    switch (action.type) {
        case "START_ADDING_ENTRIES_REQUEST":
            return {
                ...state,
                entries: [...state.entries],
                requesting: true
            }
        case "START_NEW_ENTRY":
            return {
                ...state,
                entries: [...state.entries],
                requesting: true
            }
        
        case "NEW_COMMENT":
            let entryIndex = state.entries.findIndex(function (entry) {
                return entry.id === action.payload.entryId
            })

            let entry = state.entries.find(function(entry) {
                return entry.id === action.payload.entryId
            })

            entry.comments.unshift(action.payload.comment)

            return {
                ...state,
                entries: [...state.entries.slice(0, entryIndex), entry, ...state.entries.slice(entryIndex)],
                requesting: false
            }
        
        case "GET_ENTRIES":
            
            let entriesData = []

            for (const entry of action.entries.data) {

                //debugger

                let comments = [];
                let likes = [];

                for(const includedData of action.entries.included) {
                    if (includedData.type === 'comment' && includedData.attributes.entry_id === parseInt(entry.id)) {
                        comments.push(includedData)
                    } else if (includedData.type === 'like' && includedData.attributes.entry_id === parseInt(entry.id)) {
                        likes.push(includedData)
                    }
                }

                entriesData.push(Object.assign(entry, { comments: comments, likes: likes} ))
            }

            //debugger

            return {
                ...state,
                entries: entriesData,
                requesting: false
            }
        default:
            return state
    }
}

