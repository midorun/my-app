import React, { Component } from 'react';


export default class PostAddForm extends Component {
    state = {
        value: ''
    }

    valueChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault();
        this.props.onAddPost(this.state.value);
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <form
                action=""
                className="bottom-panel d-flex"
                onSubmit={this.submit}
            >
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.valueChange}
                    value={this.state.value}
                />
                <button
                    type="submit"
                    className="btn btn-outline"
                >
                    Добавить
                </button>
            </form>
        )
    }

}
