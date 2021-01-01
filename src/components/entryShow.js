import React, { useEffect } from 'react'
import { Entry } from './entry'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { fetchEntry } from '../actions/fetchEntry'

export default function EntryShow() {

    const dispatch = useDispatch()
    const history = useHistory()
    const { entryId } = useParams()

    
    const entry = useSelector(state => state.entries.entry)
    const loading = useSelector(state => state.entries.requesting)
    
    useEffect(() => {
        dispatch(fetchEntry(history, entryId))
    }, [dispatch, entryId, history])

    // debugger
    
    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        debugger
        return (
            <React.Fragment>
                {/*<Entry key={entry.id} entryId={entry.id} entry={entry.attributes} comments={entry.comments} likes={entry.likes} />*/}
            </React.Fragment>
            
        )
    }

    
}

