import Background from '../images/verse_background.png'
import { OurMannaVerse } from './ourMannaVerse'

export default function VerseOfTheDay(props) {

    const verseStyle = {
        backgroundImage: `url(${Background})`
    }

    return (
        <div className="verse" style={verseStyle}>
            <OurMannaVerse {...props} verse={props.verse} />
        </div>
    )
}