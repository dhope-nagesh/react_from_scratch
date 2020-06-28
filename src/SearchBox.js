import React, { Component } from 'react'
import './SearchBox.scss';

export default class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
        this.updateQuery = this.updateQuery.bind(this);
    }

    updateQuery(e) {
        this.setState({
            query: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input className="search-box" type="text" placeholder="Type to search users" 
                onChange={this.updateQuery}
                />
                <button onClick={() => {
                    this.props.handleChange(this.state.query)
                }}>
                    Search
                </button>
            </div>
        )
    }
}
