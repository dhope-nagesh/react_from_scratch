import React, { Component } from 'react'
import './User.scss';

export default class User extends Component {
    render() {
        return (
            <div className={'user-container'}>
                <img src={this.props.avatar} 
                style={{ width: '50px', height: '50px', borderRadius: '50%'}} />
                <div className={'username'}>{this.props.username}</div>
            </div>
        )
    }
}
