import { OurMannaVerse } from './ourMannaVerse'

export const Home = (props) => {

    // const script = document.createElement('script')

    // script.src = 'https://beta.ourmanna.com/api/v1/js/?order=random'
    // script.type = 'text/javascript'
    // script.async = true
    // document.body.appendChild(script)
    //debugger
    return (
        <div>
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