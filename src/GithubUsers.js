import React, { Component } from 'react'
import SearchBox from './SearchBox';
import ListUsers from './ListUsers';
import Loading from './Loading';

import axios from 'axios';

import './GithubUsers.scss';

export default class GithubUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [

            ],
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(q) {
        let url = 'https://api.github.com/users';
        if(q) {
            url = `https://api.github.com/search/users?q=${q}`;
        }

        this.setState({
            isLoading: true
        }, () => {
            axios(url).then(r => {
                let users = q ? r.data.items: r.data;
                this.setState({
                    users,
                    isLoading: false,
                    selectedUser: {}
                })
            })
        })
    }

    componentDidMount() {
        this.handleChange();
    }

    render() {

        return (
            <div className="container">
                <h1>Search Github Users</h1>
                <SearchBox handleChange={this.handleChange} />
                {
                    this.state.isLoading ? <Loading />: <ListUsers users={this.state.users} />
                }
                
            </div>
        )
    }
}
