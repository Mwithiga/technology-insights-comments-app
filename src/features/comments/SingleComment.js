import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleComment = ({ match }) => {
    const { commentId } = match.params;

    const comment = useSelector(state => state.comments.find((comment) => comment.id === commentId))

    if (!comment) {
        return (
            <section>
                <h2>Commment not Found</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="comment">
                <h2> {comment.title} </h2>
                <p className="comment-content">
                    {comment.content}
                </p>
                <Link to={`/editComment/${comment.id}`} className='button'>Edit Comment</Link>
            </article>
        </section>
    );
}

export default SingleComment;
