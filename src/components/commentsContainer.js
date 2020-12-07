import { Comment } from './comment'
import React from 'react'
import { CommentInput } from './commentInput'

export const CommentsContainer = (props) => {

    let comments = props.comments.map(function (comment) {
        return <Comment key={comment.id} comment={comment} />
    })

    debugger

    return (

        <React.Fragment>
            <CommentInput {...props} />
            {comments}
        </React.Fragment>
    )
}