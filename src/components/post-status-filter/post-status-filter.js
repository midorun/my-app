import React, { Component } from 'react';

export default class PostStatusFilter extends Component {
    state = {
        buttons: [
            { status: 'all', label: 'Все' },
            { status: 'like', label: 'Понравилось' }
        ]
    }

    render() {
        const buttons = this.state.buttons.map(({ status, label }) => {
            const activeClass = this.props.status === status ? 'btn-info' : 'btn-outline-secondary';

            return (
                <button
                    key={status}
                    type='button'
                    className={`btn ${activeClass}`}
                    status={status}
                    onClick={() => this.props.onChangePostFilterStatus(status)}
                >
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

