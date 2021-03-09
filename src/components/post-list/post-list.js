import React from 'react';
import PostListItem from '../post-list-item';

const PostList = ({ posts, onDeletePost, onToggleFavourite, onToggleLike }) => {

    const postListItems = posts.map((post) => {
        if (typeof (post) === 'object' && isEmpty(post)) {
            const { id, ...postProps } = post;
            return (
                <li key={id} className="list-group-item">
                    <PostListItem
                        {...postProps}
                        onDeletePost={() => onDeletePost(id)}
                        onToggleFavourite={() => onToggleFavourite(id)}
                        onToggleLike={() => onToggleLike(id)}
                    />
                </li>
            )
        } else {
            return null;
        }
    });

    function isEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    return (
        <ul className="app-list list-group">
            {postListItems}
        </ul>
    )
}

export default PostList;