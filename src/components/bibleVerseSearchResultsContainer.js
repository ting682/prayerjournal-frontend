import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import { BibleVerseSearchResult } from './bibleVerseSearchResult'

export const BibleVerseSearchResultsContainer = (props) => {

    const results = useSelector(state => state.bibleSearchReducer)

    const [itemCopied, setItemCopied] = useState(null)

    const handleCopy = (event, id) => {
        setItemCopied(id)
    }

    let allResults = results.bibleSearch.map(function (result, index) {
        
        return <BibleVerseSearchResult key={index} copied={itemCopied} handleCopy={handleCopy} id={index} verseText={result.text} passage={result.reference} />
    })

    return (
        <React.Fragment>
            <Table>
                <thead>
                        <tr>
                            <th>Passage</th>
                            <th>Verse text</th>
                            <th></th>
                        </tr>
                        
                </thead>
                <tbody>
                    
                    {allResults}
                </tbody>
            </Table>
            
        </React.Fragment>
    )
}