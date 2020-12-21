export const OurMannaVerse = (props) => {

    let mannaverse = 'Loading'
    let mannaverse_reference = ''
    let mannaverse_version = ''

    if(props.verse.verse.length > 0) {
        mannaverse = props.verse.verse[0].verse.details.text
        mannaverse_reference = props.verse.verse[0].verse.details.reference;
        mannaverse_version = `(` + props.verse.verse[0].verse.details.version + `) Verse of the day powered by OurManna.com`
    }
    //     if(document.getElementById('ourmanna-verse')!==null){
    //         document.getElementById('ourmanna-verse').innerHTML=
    //         '<div id="mannaverse-container"><p id="mannaverse">'
    //         + mannaverse+'</p><p id="mannaverse-reference">'
    //         + mannaverse_reference+'<small id="mannaverse-version"><i>('
    //         + mannaverse_version+')</i></small></p></div>';
    //     }
    // }
            
        
    // debugger

    return (
        <div id="ourmanna-verse">
            <div id="mannaverse-container">
                <p id="mannaverse">
                    {mannaverse}
                </p>
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