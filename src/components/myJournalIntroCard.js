import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Background from '../images/my_journal_page_intro.png'

export default function MyJournalIntroCard() {

    const cardStyle = {
        backgroundImage: `url(${Background})`,
        height: "300px",
        backgroundRepeat: 'no-repeat',
        
    }

    return (
        <div className="myjournalintrocard" style={cardStyle}>
            
            
            <Button as={Link} variant="outline-dark"  id="myjournalintrobutton" to={"/myjournal"}>My Journal Page</Button>
        </div>
    )
}