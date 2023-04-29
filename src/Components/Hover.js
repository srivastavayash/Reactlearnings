import React, { Component } from 'react'
class Hover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            click: 0
        }
    }
    Hover = () => {
        this.setState(prevState => {
            console.log(this.state.click)
            return { click: prevState.click + 1 }
        })
    }
    render() {
        return <button onMouseOver={this.Hover}>Clicked {this.state.click} times</button>
    }
}

export default Hover