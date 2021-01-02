import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FbShare (props) {

    const url = 'https://prayerjournal.place/'

    const entryRoute = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fprayerjournal.place%2Fentries%2F${props.entryRoute}&amp;src=sdkpreparse`

    return (
        <React.Fragment>

        
        <FontAwesomeIcon icon={['fab', 'facebook']} />
            <div class="fb-share-button" data-href={url + props.route} data-layout="button" data-size="small"><a target="_blank" href={entryRoute} class="fb-xfbml-parse-ignore">Share</a></div>

            </React.Fragment>
        
    )
}