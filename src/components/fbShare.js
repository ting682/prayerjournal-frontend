import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { useSelector } from 'react-redux'

export default function FbShare (props) {

    const url = 'https://prayerjournal.place/'

    const entryRoute = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fprayerjournal.place%2Fentries%2F${props.entryRoute}&amp;src=sdkpreparse`

    const loading = useSelector(state => state.entries.requesting)

    useEffect(() => {
        if (!loading)  {
            window.FB.XFBML.parse(); 
        }
           
    }, [loading])

    return (
        <React.Fragment>

        {/* <FacebookProvider appId="1671535253031182">
            <Share href="http://www.facebook.com">
                <button>Share</button>
            </Share>
        </FacebookProvider> */}
        
        <div className="fb-share-button" data-href={url + props.route} data-layout="button" data-size="small"><a target="_blank" href={entryRoute} className="fb-xfbml-parse-ignore"><FontAwesomeIcon icon={faFacebookSquare} size="lg"/></a></div>
       

            </React.Fragment>
        
    )
}