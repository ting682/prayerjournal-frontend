import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import { BibleVerseSearchResult } from './bibleVerseSearchResult'

export const BibleVerseSearchResultsContainer = (props) => {

    const results = useSelector(state => state.bibleSearchReducer)

    let allResults = results.bibleSearch.map(function (result, index) {
        //debugger
        return <BibleVerseSearchResult key={index} verseText={result.text} passage={result.reference} />
    })

    return (
        <React.Fragment>
            <Table>
                <thead>
                    
                    <th>Passage</th>
                    <th>Verse text</th>
                    <th></th>
                </thead>
                {allResults}
            </Table>
            
        </React.Fragment>
    )
}