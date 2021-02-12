import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const OurMannaVerse = (props) => {

    const path = useSelector(state => state.router.location.pathname)

    let mannaverse = 'Loading'
    let mannaverse_reference = ''
    let mannaverse_version = ''
    //debugger
    if(props.verse.length !== 0) {
        mannaverse = props.verse.text
        mannaverse_reference = props.verse.reference;
        mannaverse_version = `(` + props.verse.version + `) powered by OurManna.com`
    }
    // debugger
    if (path !== '/myjournal') {
        return (

            <React.Fragment>
            <div className="verseheading" style={{position: "relative", textAlign: 'center', color: 'black', fontFamily: "Georgia, serif"}}>
                    <div style={{fontSize: "3vh"}}>Verse of the day</div>
            </div>
            <div className="ourmanna-verse">
                
                <div id="mannaverse-container">
                    
                    <h2 id="mannaverse" style={{fontSize: "2vh"}}>
                        {mannaverse}
                    </h2>
                    <p id="mannaverse-reference" style={{fontSize: "2vh"}}>
                        {mannaverse_reference}
                    </p>
                    <small id="mannaverse-version">
                        <i>{mannaverse_version}</i>
                    </small><br />
                    <Button variant="secondary" as={Link} to="/entries">Learn more about the community page</Button>
                </div>
            </div>
            </React.Fragment>
        )
    } else {
        return (

            <React.Fragment>
            <div className="verseheading" style={{position: "relative", top: "30%", textAlign: 'center', color: 'black', fontFamily: "Georgia, serif"}}>
                    <div style={{fontSize: "1.5rem"}}>Verse of the day</div>
            </div>
            <div className="ourmanna-verse">
                
                <div id="mannaverse-container">
                    
                    <h2 id="mannaverse" style={{fontSize: ".8rem"}}>
                        {mannaverse}
                    </h2>
                    <p id="mannaverse-reference" style={{fontSize: ".8rem"}}>
                        {mannaverse_reference}
                    </p>
                    <small id="mannaverse-version">
                        <i>{mannaverse_version}</i>
                    </small><br />
                    
                </div>
            </div>
            </React.Fragment>
        )
    }

    
}