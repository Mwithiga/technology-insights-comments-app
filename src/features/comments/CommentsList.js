import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CommentsList = () => {
    const comments = useSelector(state => state.comments)

    const renderedComments = comments.map((comment) => {
        return <article className="comment-excerpt" key={comment.id}>
            <h2>{comment.title}</h2>
            <p className='comment-content'> {comment.content.substring(0, 100)} </p>
            <Link to={`/comments/${comment.id}`} className='button muted-button'>View Comment</Link>
        </article>
    })
    return (
        <section className="comments-list">
            {renderedComments.length === 0 ? '' : <h2>Comments</h2>}
            {renderedComments.reverse()}
        </section>

    );
}

export default CommentsList;
