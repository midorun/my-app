import React from 'react';

const PostListItem = ({ label, onDeletePost, onToggleFavourite, onToggleLike, favourite, like }) => {
    let liClassNames = 'app-list-item d-flex justify-content-between';
    if (favourite) {
        liClassNames += ' favourite';
    }

    if (like) {
        liClassNames += ' like';
    }

    return (
        <div className={liClassNames}>
            <span
                className="app-list-item-label"
                onClick={onToggleLike}
            >
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-star btn-sm"
                    onClick={onToggleFavourite}
                >
                    <i className="fa fa-star"></i>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDeletePost}
                >
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}

export default PostListItem;