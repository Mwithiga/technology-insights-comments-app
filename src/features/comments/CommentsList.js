import React from 'react';
import { useSelector } from 'react-redux';

const CommentsList = () => {
    const comments = useSelector(state => state.comments)

    const renderedPosts = comments.map((post) => {
        return <article className="post-excerpt" key={post.id}>
            <h2>{post.title}</h2>
            <p className='comments-content'> {post.content.substring(0, 100)} </p>
        </article>
    })
    return (
        <section className="comments-list">
            <h2>Comments</h2>
            {renderedPosts.reverse()}
        </section>

    );
}

export default CommentsList;
