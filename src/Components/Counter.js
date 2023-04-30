import React, { Component } from 'react'
import UpdatedComponent from './ParentCounter'
class Counter extends Component {
    render() {
        const {click,clicked}=this.props
        return <button onClick={clicked}> Clicked {click} times</button>
    }
}
export default UpdatedComponent(Counter)