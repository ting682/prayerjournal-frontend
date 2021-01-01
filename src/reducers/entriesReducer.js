export function entriesReducer(state = { entries: [], requesting: false}, action) {
    let entryIndex;
    let entry;
    let comments;
    let likes;
    let oldEntry;
    let entryText;
    let tempDiv;
    switch (action.type) {
        case "START_ADDING_ENTRIES_REQUEST":
            return {
                ...state,
                entries: [],
                requesting: true
            }
        case "START_ENTRY_REQUEST":
            return {
                ...state,
                entry: [],
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

        case 'START_EDIT_ENTRY':
            return {
                ...state,
                entries: [...state.entries],
                requesting: true
            }
        case 'START_DELETE_ENTRY':
            return {
                ...state,
                entries: [...state.entries],
                requesting: true
            }
        
        case 'START_NEW_LIKE':
            return {
                ...state,
                entries: [...state.entries],
                requesting: true
            }

        case 'START_PATCH_LIKE':
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
            entry.entryText += action.payload.comment.data.attributes.content
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

                comments = [];
                likes = [];

                tempDiv = document.createElement('div')
                tempDiv.innerHTML = entry.attributes.content
                entryText = tempDiv.textContent.toLowerCase()

                for(const includedData of action.entries.included) {
                    if (includedData.type === 'comment' && includedData.attributes.entry_id === parseInt(entry.id)) {
                        entryText += " " + includedData.attributes.content
                        comments.push(includedData)
                    } else if (includedData.type === 'like' && includedData.attributes.entry_id === parseInt(entry.id)) {
                        likes.push(includedData)
                    }
                }

                entriesData.push(Object.assign(entry, { comments: comments, likes: likes, entryText: entryText} ))
            }

            //debugger

            return {
                ...state,
                entries: entriesData,
                requesting: false
            }

        case 'GET_ENTRY':
            
            debugger
            return {
                ...state,
                entry: [action.payload.data]
            }

        case 'NEW_ENTRY':
            //debugger
            entry = action.entry.data
            
            tempDiv = document.createElement('div')
            tempDiv.innerHTML = entry.attributes.content
            entryText = tempDiv.textContent.toLowerCase()

            Object.assign(entry, { comments: [], likes: [], entryText: entryText} )

            return {
                ...state,
                entries: [entry, ...state.entries],
                requesting: false
            }

        case 'EDIT_ENTRY':
            
            entryIndex = state.entries.findIndex(function (entry) {
                //debugger
                return parseInt(entry.id) === parseInt(action.entry.data.id)
            })

            oldEntry = state.entries.find(function(entry) {
                return parseInt(entry.id) === parseInt(action.entry.data.id)
            })

            entry = action.entry.data    

            comments = oldEntry.comments;
            likes = oldEntry.likes;
            

            Object.assign(entry, { comments: comments, likes: likes} )
            //debugger
            return {
                ...state,
                entries: [entry, ...state.entries.slice(0, entryIndex), ...state.entries.slice(entryIndex + 1)],
                requesting: false
            }
        
        case 'DELETE_ENTRY':
            //debugger
            entryIndex = state.entries.findIndex(function (entry) {
                //debugger
                return parseInt(entry.id) === parseInt(action.payload.entryId)
            })

            return {
                ...state,
                entries: [...state.entries.slice(0, entryIndex), ...state.entries.slice(entryIndex + 1)],
                requesting: false
            }
        
        case 'NEW_LIKE':
            //debugger
            entryIndex = state.entries.findIndex(function (entry) {
                //debugger
                return parseInt(entry.id) === parseInt(action.like.data.attributes.entry_id)
            })

            entry = state.entries.find(function(entry) {
                return parseInt(entry.id) === action.like.data.attributes.entry_id
            })

            entry.attributes.likes_count += 1

            entry.likes.push(action.like.data)

            return {
                ...state,
                entries: [...state.entries.slice(0, entryIndex), entry, ...state.entries.slice(entryIndex + 1)],
                requesting: false
            }
        
        case 'PATCH_LIKE':
            //debugger
            entryIndex = state.entries.findIndex(function (entry) {
                //debugger
                return parseInt(entry.id) === parseInt(action.payload.like.data.attributes.entry_id)
            })

            entry = state.entries.find(function(entry) {
                return parseInt(entry.id) === action.payload.like.data.attributes.entry_id
            })
            
            
            entry.attributes.likes_count = action.payload.entry.data.attributes.likes_count
            
            //debugger
            entry.likes = entry.likes.filter(function (like) {
                return like.id !== action.payload.like.data.id
            })

            //debugger 

            entry.likes.push(action.payload.like.data)

            return {
                ...state,
                entries: [...state.entries.slice(0, entryIndex), entry, ...state.entries.slice(entryIndex + 1)],
                requesting: false
            }

        default:
            return state
    }
}

