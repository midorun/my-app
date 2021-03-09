import React from 'react';

const PostAddForm = ({ addPost }) => {
    return (
        <div action="" className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
            />

            <button
                type="submit"
                className="btn btn-outline"
                onClick={() => addPost('hello')}
            >
                Добавить
            </button>
        </div>
    )
}

export default PostAddForm;