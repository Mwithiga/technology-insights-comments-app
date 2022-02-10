import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { commentUpdated } from './commentsSlice'

export const EditCommentForm = ({ match }) => {
    const { commentId } = match.params

    const comment = useSelector(state => state.comments.find(comment => comment.id === commentId))

    const [title, setTitle] = useState(comment.title)
    const [content, setContent] = useState(comment.content)

    const dispatch = useDispatch()
    const history = useHistory()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSaveCommentClicked = () => {
        if (title && content) {
            dispatch(commentUpdated({ id: commentId, title, content }))
            history.push(`/comments/${commentId}`)
        }
    }

    return (
        <section>
            <h2>Edit Comment</h2>
            <form>
                <label htmlFor="commentTitle">Comment Title:</label>
                <input
                    type="text"
                    id="commentTitle"
                    name="commentTitle"
                    placeholder="What's on your mind?"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="commentContent">Content:</label>
                <textarea
                    id="commentContent"
                    name="commentContent"
                    value={content}
                    onChange={onContentChanged}
                />
            </form>
            <button type="button" onClick={onSaveCommentClicked}>
                Save Comment
            </button>
        </section>
    )
}