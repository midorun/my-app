import React from 'react';

const AppHeader = ({ postsQuantity, likedPosts }) => {
    return (

        <div className="app-header d-flex">
            <h1>Dmitriy Vorozheykin</h1>
            <h2>{postsQuantity} записей, из них понравилось {likedPosts}</h2>
        </div>
    )
}

export default AppHeader;