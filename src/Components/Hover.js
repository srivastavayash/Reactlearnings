import React, { Component } from 'react'
import UpdatedComponent from './ParentCounter'
class Hover extends Component {
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
        const {click,clicked}=this.props
        return <button onMouseOver={clicked}>{this.props.name} Hovered {click} times</button>
    }
}
export default UpdatedComponent(Hover)