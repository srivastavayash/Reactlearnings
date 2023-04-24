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

    render() {
        console.log('render LifecycleA')
        return (<div>
            <LifecycleB/></div>)
    }

}

export default LifecycleA