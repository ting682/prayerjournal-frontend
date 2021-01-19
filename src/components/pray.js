import { Image } from "react-bootstrap"

export const Pray = (props) => {
    if(props.prayed) {
        return (
            <>
                <Image src="https://prayerjournal.place/pray_2.svg" style={{width: "30px"}}/>
            </>
        )
    } else {
        return (
            <>
                <Image src="https://prayerjournal.place/pray_1.svg" style={{width: "30px"}}/>
            </>
        )
    }
    // debugger
    
}