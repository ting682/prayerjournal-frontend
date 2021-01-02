
import { OurMannaVerse } from './ourMannaVerse'
import VerseOfTheDay from './verseOfTheDay'
import { IntroCard } from './introCard'

export const Home = (props) => {

   
    return (
        <div>
            <img className="journalintro desktop" src="prayer_journal_intro_picture_desktop.png" alt="Prayer Journal Intro" />
            <img className="journalintro mobile" src="prayer_journal_intro_picture_mobile.png" alt="Prayer Journal Intro" />
            {/* <h1 className="journalheading">Welcome to the</h1>
            <h1 className="journalheading">Prayer Journal app!</h1> */}
            {/*This website is made for people who want to keep a prayer journal. Also, we have a prayer wall so all who participate can pray together! */}
            {/* <p>
                
                This web application is made for those who want to keep a journal, post, share, and interact with fellow users! 
            </p> */}

            
            
            {/* <p>
                Please login or signup!
            </p> */}
            <VerseOfTheDay {...props} verse={props.verse} />
            
            <IntroCard image={"https://prayerjournal.place/good_news_intro.png"}title={"The Good News!"} text={"Jesus died for our sins and we're forgiven by His blood for all who believe."}/>

        </div>
    )
}