import { Comment } from './comment'
import React from 'react'

export const CommentsContainer = (props) => {

    let comments = props.comments.map(function (comment) {
        return <Comment key={comment.id} comment={comment} />
    })

    return (
        <React.Fragment>
            {comments}
        </React.Fragment>
    )
}