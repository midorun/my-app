import React, { Component } from 'react';
import nextId from 'react-id-generator';
// modules
import AppHeader from '../app-header';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import PostAddForm from '../post-add-form';
import SearchPanel from '../search-panel';

// styles
import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';

export default class App extends Component {
    state = {
        posts: [
            { id: nextId(), label: 'Going to learn React', favourite: true, like: true },
            { id: nextId(), label: 'That is so good', favourite: false, like: false },
            { id: nextId(), label: 'How to change state... :(', favourite: false, like: false },
        ],
        searchValue: '',
        postFilterStatus: 'all'
    }

    deletePost = (id) => {
        this.setState(({ posts }) => ({
            posts: posts.filter((post) => post.id !== id)
        }));
    }

    addPost = (value) => {
        const newPost = {
            id: nextId(),
            label: value,
            favourite: false
        }

        this.setState(({ posts }) => ({
            posts: [...posts, newPost]
        }));
    }

    toggleFavourite = (id) => {
        this.setState(({ posts }) => ({
            posts: posts.map(
                post => post.id === id ? { ...post, favourite: !post.favourite } : post
            )
        }));
    }

    toogleLike = (id) => {
        this.setState(({ posts }) => ({
            posts: posts.map(post => post.id === id ? { ...post, like: !post.like } : post)
        }));
    }

    searchPost = (posts, searchValue) => {
        if (!searchValue.length) {
            return posts;
        }
        return posts.filter(post => post.label.indexOf(searchValue) > -1)
    }

    updateSearchResult = (searchValue) => {
        this.setState({ searchValue });
    }

    filterPosts = (posts, postFilterStatus) => {
        if (postFilterStatus === 'like') {
            return posts.filter(post => post.like);
        } else {
            return posts;
        }
    }

    changePostFilterStatus = (postFilterStatus) => {
        this.setState({ postFilterStatus })
    }

    render() {
        const { posts, searchValue, postFilterStatus } = this.state;

        const likedPostsQuantity = posts.filter(post => post.like).length;
        const postsQuantity = posts.length;

        const properPosts = this.filterPosts(this.searchPost(posts, searchValue), postFilterStatus);

        return (
            <div className="app">
                <AppHeader
                    likedPosts={likedPostsQuantity}
                    postsQuantity={postsQuantity}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearchResult={this.updateSearchResult}
                    />
                    <PostStatusFilter
                        status={postFilterStatus}
                        onChangePostFilterStatus={this.changePostFilterStatus}
                    />
                </div>
                <PostList
                    posts={properPosts}
                    onDeletePost={this.deletePost}
                    onToggleFavourite={this.toggleFavourite}
                    onToggleLike={this.toogleLike}
                />
                <PostAddForm
                    onAddPost={this.addPost}
                />
            </div>
        )
    }

}
