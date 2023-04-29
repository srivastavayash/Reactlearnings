import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            click: 0
        }
    }
    clicked = () => {
        this.setState(prevState => {
            console.log(this.state.click)
            return { click: prevState.click + 1 }

        })
    }
    render() {
        return <button onClick={this.clicked}>Clicked {this.state.click} times</button>
    }
}

export default Counter