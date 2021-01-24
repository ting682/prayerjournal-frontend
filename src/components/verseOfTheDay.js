import Background from '../images/verse_of_the_day_2.png'
import { OurMannaVerse } from './ourMannaVerse'

export default function VerseOfTheDay(props) {

    const verseStyle = {
        backgroundImage: `url(${Background})`,
        fontSize: "2vh",
        backgroundSize: "cover"
    }

    return (
        <div className="verse" style={verseStyle}>
            <OurMannaVerse {...props} verse={props.verse} />
        </div>
    )
}