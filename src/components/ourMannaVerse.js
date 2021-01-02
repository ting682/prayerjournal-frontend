export const OurMannaVerse = (props) => {

    let mannaverse = 'Loading'
    let mannaverse_reference = ''
    let mannaverse_version = ''
    //debugger
    if(props.verse.length !== 0) {
        mannaverse = props.verse.text
        mannaverse_reference = props.verse.reference;
        mannaverse_version = `(` + props.verse.version + `) Verse of the day powered by OurManna.com`
    }

    return (
        <div id="ourmanna-verse">
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
    )
}