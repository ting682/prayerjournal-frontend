import React from 'react'

export const OurMannaVerse = (props) => {

    let mannaverse = 'Loading'
    let mannaverse_reference = ''
    let mannaverse_version = ''
    //debugger
    if(props.verse.length !== 0) {
        mannaverse = props.verse.text
        mannaverse_reference = props.verse.reference;
        mannaverse_version = `(` + props.verse.version + `) powered by OurManna.com`
    }
    
    return (
        <React.Fragment>
        <div className="verseheading" style={{position: "relative", top: "20px", textAlign: 'center', color: 'pink', fontFamily: "Georgia, serif"}}>
                <h1>Verse of the day</h1>
        </div>
        <div className={props.location.pathname === '/' ? "ourmanna-verse" : "ourmanna-verse-entries"}>
            
            <div id="mannaverse-container">
                
                <h2 id="mannaverse">
                    {mannaverse}
                </h2>
                <p id="mannaverse-reference">
                    {mannaverse_reference}
                </p>
                <small id="mannaverse-version">
                    <i>{mannaverse_version}</i>
                </small>
            </div>
        </div>
        </React.Fragment>
    )
}