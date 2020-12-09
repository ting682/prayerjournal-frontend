export function entriesReducer(state = { entries: [], requesting: false}, action) {
    let entryIndex;
    let entry;
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
        case 'START_DELETE_COMMENT':
            return {
                ...state,
                entries: [...state.entries],
                requesting: true
            }
        case "NEW_COMMENT":
            entryIndex = state.entries.findIndex(function (entry) {
                //debugger
                return parseInt(entry.id) === action.payload.entryId
            })

            entry = state.entries.find(function(entry) {
                return parseInt(entry.id) === action.payload.entryId
            })

            
            entry.comments.push(action.payload.comment.data)

            //debugger

            return {
                ...state,
                entries: [...state.entries.slice(0, entryIndex), entry, ...state.entries.slice(entryIndex + 1)],
                requesting: false
            }

        case 'DELETE_COMMENT':
            entryIndex = state.entries.findIndex(function (entry) {
                //debugger
                return parseInt(entry.id) === action.payload.entryId
            })

            entry = state.entries.find(function(entry) {
                return parseInt(entry.id) === action.payload.entryId
            })

            
            entry.comments = entry.comments.filter(function (comment) {
                return comment.id !== action.payload.commentId
            })

            //debugger

            return {
                ...state,
                entries: [...state.entries.slice(0, entryIndex), entry, ...state.entries.slice(entryIndex + 1)],
                requesting: false
            }
        
            case "EDIT_COMMENT":
                entryIndex = state.entries.findIndex(function (entry) {
                    //debugger
                    return parseInt(entry.id) === action.payload.entryId
                })
    
                entry = state.entries.find(function(entry) {
                    return parseInt(entry.id) === action.payload.entryId
                })
                
                entry.comments = entry.comments.filter(function (comment) {
                    //debugger
                    return comment.id !== action.payload.comment.data.id
                })

                entry.comments.push(action.payload.comment.data)
    
                //debugger
    
                return {
                    ...state,
                    entries: [...state.entries.slice(0, entryIndex), entry, ...state.entries.slice(entryIndex + 1)],
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

