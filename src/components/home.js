
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

            <IntroCard  title={"The Good News!"} text={["Jesus died for our sins and we're forgiven by His blood for all who believe.", <p>For Jesus said: </p>, <em>For this is how God loved the world: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life.</em>, <p><em>John 3:16</em></p>, <p>We are to love one another and stay in fellowship with one another. Jesus says: </p>, <p><em>A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another.  By this all people will know that you are my disciples, if you have love for one another.</em></p>,  <p><em>- John 13:34-35 </em></p>, <p>The apostle Paul says: </p>, <p><em>So encourage each other and build each other up, just as you are already doing - 1 Thessalonians 5:11</em></p>, <p>Let this prayer journal be a way of staying in fellowship with one another and allow yourself to have a deeper relationship with God by keeping a journal of your thoughts and prayers.</p>, ""]} />
            
            {/* <p>
                Please login or signup!
            </p> */}
            <VerseOfTheDay {...props} verse={props.verse} ></VerseOfTheDay>
            


            <IntroCard image={"https://prayerjournal.place/good_news_intro.png"} title={"Is the concept of a prayer journal biblical?"} text={["I believe the concept of a prayer journal is biblical. In the book of Psalms, David and many others wrote about their feelings and about their relationship with God. Here is a link I found interesting:", <p><a href="https://www.gotquestions.org/prayer-journal.html">Got questions? Is the concept of a prayer journal biblical?</a></p>]}/>

        </div>
    )
}