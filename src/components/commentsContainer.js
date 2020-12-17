import { Comment } from './comment'
import React from 'react'
import { CommentInput } from './commentInput'
import Mark from 'mark.js'

export const CommentsContainer = (props) => {

    let comments = props.comments.map(function (comment) {
        return (
            <Comment key={comment.id} comment={comment} {...props}/>
        )
    }, props)

    if (props.search === '') {
        for(const comment of document.getElementsByClassName('commentContent')) {
            let instance = new Mark(comment)
            instance.unmark()
        }
    } else {
        for(const comment of document.getElementsByClassName('commentContent')) {
            let instance = new Mark(comment)
            instance.mark(props.search)
        }
    }
        
    // }

    return (

        <React.Fragment>
            <CommentInput {...props} />
            {comments}
        </React.Fragment>
    )
}