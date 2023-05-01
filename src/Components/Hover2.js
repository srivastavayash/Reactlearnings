import React, { Component } from 'react'

export class Hover2 extends Component {
    
    render() {
        const {click,increment}=this.props
        return (
        <h1 onMouseOver={increment}>Hovered {click} times</h1>
        )
    }
}

export default Hover2