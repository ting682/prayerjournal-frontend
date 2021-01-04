import { Button } from 'react-bootstrap'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useState } from 'react'

export const BibleVerseSearchResult = (props) => {

    const copyText = props.verseText + " - " + props.passage

    

    return (
        <tr>
            
            <td>{props.passage}</td>
            <td>{props.verseText}</td>
            <td><CopyToClipboard text={copyText} >
                <Button onClick={(event, id) => props.handleCopy(event, props.id)} >{props.copied === props.id ? "Copied" : "Copy"}</Button>
            </CopyToClipboard></td>
            
        </tr>
    )
}