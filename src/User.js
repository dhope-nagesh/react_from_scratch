import React, { Component } from 'react'
import './User.scss';
import Loading from './Loading';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
        this.onLoaded = this.onLoaded.bind(this);
    }
    onLoaded() {
        this.setState({
            isLoading: false
        })
    }
    render() {
        return (
            <div
                className={'user-container'}
                onClick={() => {
                    window.open(this.props.url);
                }}
            >
                <div>
                    <div style={{display: this.state.isLoading ? 'block': 'none'}}>
                        <Loading icon='puff' />
                    </div>
                    <img 
                    src={this.props.avatar}
                    style={{ width: '50px', height: '50px', borderRadius: '50%', display: this.state.isLoading ? 'none': 'block' }}     
                    onLoad={this.onLoaded}
                    />
                </div>
                <div className={'username'}>{this.props.username}</div>
            </div>
        )
    }
}
