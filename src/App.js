import React, { Component } from 'react'
import GithubUsers from './GithubUsers';
import './App.scss';

// props
// state
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <div className="main-container">
         <GithubUsers />
      </div>
    )
  }
}
