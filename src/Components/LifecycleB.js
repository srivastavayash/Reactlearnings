import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'hi'
        }
        console.log('lifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('static getDerivedaStateProps LifecycleB ')
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount LifecycleB')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate LifecycleB')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate LifecycleB')
        return null
    }
    componentDidUpdate() {
        console.log('componentDidUpdate LifecycleB')
    }
    render() {
        console.log('render LifecycleB')
        return (<div>LifecycleB</div>)
    }
}

export default LifecycleB