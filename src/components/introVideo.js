import React, { useRef } from 'react'

export function IntroVideo (props) {

    const vidRef = useRef(null)

    const handlePlay = (e) => {
        vidRef.current.play()
        
    }
    
    return (
        <React.Fragment>
            <video id="video" autoPlay={true} loop width="100%" ref={vidRef} height="100%" >
                <source src="prayer_journal_intro.mp4" type="video/mp4" />
            </video>
            <button onClick={handlePlay}>Play</button>
        </React.Fragment>
        
        
    )
}