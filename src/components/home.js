import { getDefaultLocale } from 'javascript-time-ago'
import { OurMannaVerse } from './ourMannaVerse'
import { useEffect } from 'react'


export const Home = (props) => {

    // const getData = () => {
    //     debugger
    //     fetch('/data/resumeData.json',
    //     {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     }).then(resp => resp.json())
    //     .then(data => {
    //         debugger
    //         console.log(data)
    //     })
    // }

    // useEffect(() => {
    //     getData()
    // }, [])
    //debugger
    return (
        <div>
            <img className="journalintro" src="prayer_journal_intro.png" alt="Prayer Journal Intro" />
            <h1 className="journalheading">Welcome to the</h1>
            <h1 className="journalheading">Prayer Journal app!</h1>

            <p>
                {/*This website is made for people who want to keep a prayer journal. Also, we have a prayer wall so all who participate can pray together! */}
                This web application is made for those who want to keep a journal, post, share, and interact with fellow users! 
            </p>

            
            
            <p>
                Please login or signup!
            </p>
            <OurMannaVerse {...props} verse={props.verse} />
        </div>
    )
}