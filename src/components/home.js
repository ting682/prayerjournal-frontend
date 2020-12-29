import { OurMannaVerse } from './ourMannaVerse'
import { IntroVideo } from './introVideo'

export const Home = (props) => {

    //debugger
    return (
        <div>
            <IntroVideo />
            <h1>Welcome to the Prayer Journal app!</h1>
            <p>
                This website is made for people who want to keep a prayer journal. Also, we have a prayer wall so all who participate can pray together!
            </p>
            
            <p>
                Please login or signup!
            </p>
            <OurMannaVerse {...props} verse={props.verse} />
        </div>
    )
}