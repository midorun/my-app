import React, { Component } from 'react';

export default class SearchPanel extends Component {
    state = {
        searchValue: ''
    }

    updateSearchResult = (e) => {
        const searchValue = e.target.value;
        this.setState({ searchValue });
        this.props.onUpdateSearchResult(searchValue);
    }

    render() {
        return (
            <input
                type="text"
                placeholder="Поиск по записям"
                className="form-control search-input"
                onChange={this.updateSearchResult}
            />
        )
    }
}