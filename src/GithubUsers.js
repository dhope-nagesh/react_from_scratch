import React, { Component } from 'react'
import SearchBox from './SearchBox';
import ListUsers from './ListUsers'

import axios from 'axios';

export default class GithubUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [

            ]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(q) {

        const url = `https://api.github.com/search/users?q=${q}`

        axios(url).then(r => {
            this.setState({
                users: r.data.items
            })
        })
    }

    render() {

        return (
            <div>
                <h1>Search Github Users</h1>
                <SearchBox handleChange={this.handleChange} />
                <ListUsers users={this.state.users} />
            </div>
        )
    }
}
