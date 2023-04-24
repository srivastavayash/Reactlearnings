import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'hi'
        }
        console.log('constructor lifecycleA')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('static getDerivedaStateProps lifecycleA ')
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount LifecycleA')
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate lifecycleA')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate lifecycleA')
        return null
    }
    componentDidUpdate() {
        console.log('componentDidUpdate LifecycleA')
    }
    message=()=> {
        this.setState({
            message: 'hi2'
        })
    }
    render() {
        console.log('render LifecycleA')
        return (<div>LifecycleA <br/>
            <button onClick={this.message}>ClickME</button>
            <LifecycleB /></div>)
    }

}

export default LifecycleA