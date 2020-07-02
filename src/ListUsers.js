import React, { Component } from 'react'
import User from './User';

export default class ListUsers extends Component {
    render() {
        const { users } = this.props;
        const usersList = users.map(user => {
            return <User url={user.html_url} avatar={user.avatar_url} username={user.login} />
        });
        
        return (
            <div className="list-container">
                {
                    usersList
                }
            </div>
        )
    }
}
