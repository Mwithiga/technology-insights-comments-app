import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { commentAdded } from './commentsSlice';

const AddCommentForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    const onSaveComment = () => {
        if (title && content) {
            dispatch(
                commentAdded({
                    id: nanoid(),
                    title,
                    content,
                })
            )
        }

        setTitle('');
        setContent('');


    }

    return (
        <section>
            <h2>What's on your mind?</h2>
            <form >
                <label htmlFor="commentTitle" >Comment Title:</label>
                <input type="text" id='commentTitle' name='commentTitle' value={title} onChange={onTitleChanged} />
                <label htmlFor='commentContent'> Comment Content</label>
                <textarea name="commentContent" id="commentContent" cols="30" rows="10" value={content} onChange={onContentChanged} className="col"></textarea>
                <button type="button" onClick={onSaveComment}>Save Comment</button>
            </form>
        </section>
    );
}

export default AddCommentForm;
