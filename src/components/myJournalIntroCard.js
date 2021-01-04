import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Background from '../images/my_journal_page_intro.png'

export default function MyJournalIntroCard() {

    const cardStyle = {
        backgroundImage: `url(${Background})`,
        
        backgroundRepeat: 'no-repeat',
        fontFamily: "Georgia, serif"
        
    }

    return (
        <div className="myjournalintrocard" style={cardStyle}>
            
            <div id="myjournalintrobutton" >

            <Button as={Link} variant="secondary"  to={"/myjournal"}>My Journal Page</Button>
            </div>
        </div>
    )
}