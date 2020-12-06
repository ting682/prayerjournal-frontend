import React from 'react'

export const User = (props) => {

    //debugger
    return (
        <React.Fragment>
            
            <p>{props.user.attributes.name}</p>
            <p>{props.user.attributes.email_address}</p>
            <p>{props.user.attributes.bio}</p>
        </React.Fragment>
    )
}