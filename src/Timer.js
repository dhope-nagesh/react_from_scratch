import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticks: 0,
            isStarted: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.timerID = null;
    }
    handleClick() {
        const { isStarted } = this.state;
        if(isStarted) {
            if(this.timerID) {
                this.setState({
                    isStarted: false
                }, () => {
                    clearInterval(this.timerID);
                })
                
            }
        } else {
            this.timerID = setInterval(() => {
                this.setState({
                    ticks: this.state.ticks + 1,
                    isStarted: true
                })
            }, 1000);
        }
        
    }

  componentDidMount() {
    console.log('mounted')
  }
  shouldComponentUpdate(nextProps, nextState) {
      console.log('will updated')
      return true;
  }
  componentWillUnmount() {
      console.log('component will unmount');
  }
  
    render() {
        return (
            <div>
                <h1>{this.state.ticks}</h1>
        <button onClick={this.handleClick}>{this.state.isStarted ? 'Pause': 'Start'}</button>
            </div>
        )
    }
}
