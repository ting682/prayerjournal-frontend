import { Image } from "react-bootstrap"

export const Pray = (props) => {
    if(props.prayed) {
        return (
            <>
                <Image src="pray_2.svg" style={{width: "30px"}}/>
            </>
        )
    } else {
        return (
            <>
                <Image src="pray_1.svg" style={{width: "30px"}}/>
            </>
        )
    }
    // debugger
    
}