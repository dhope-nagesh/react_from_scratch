import React, { Component } from 'react'
import GithubUsers from './GithubUsers';


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
      <div>
         <GithubUsers />
      </div>
    )
  }
}
