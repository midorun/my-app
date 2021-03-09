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
        ]
    }

    deletePost = (id) => {
        this.setState(({ posts }) => ({
            posts: posts.filter((post) => post.id !== id)
        }));
    }

    addPost = (body) => {
        const newPost = {
            id: nextId(),
            label: body,
            favourite: false
        }

        this.setState(({ posts }) => ({
            posts: [...posts, newPost]
        }));
    }

    toggleFavourite = (id) => {
        this.setState(({ posts }) => ({
            posts: posts.map((post) => {
                if (post.id === id) {
                    post.favourite = !post.favourite;
                }
                return post;
            })
        }));
    }

    toogleLike = (id) => {
        this.setState(({ posts }) => {
            return {
                posts: posts.map((post) => {
                    if (post.id === id) {
                        post.like = !post.like;
                    }
                    return post;
                })

            }
        });
    }


    render() {
        const { posts } = this.state

        const likedPosts = posts.filter(post => post.like).length;
        const postsQuantity = posts.length;
        return (
            <div className="app">
                <AppHeader
                    likedPosts={likedPosts}
                    postsQuantity={postsQuantity}
                />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.posts}
                    onDeletePost={this.deletePost}
                    onToggleFavourite={this.toggleFavourite}
                    onToggleLike={this.toogleLike}
                />
                <PostAddForm
                    addPost={this.addPost}
                />
            </div>
        )
    }

}
