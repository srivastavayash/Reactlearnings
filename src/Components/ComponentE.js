import React, { Component } from 'react'
import Componentf from './Componentf'
import UserContext from './UserContext'

class ComponentE extends Component {
    static contextType = UserContext
    render() {
        return (<div>
            hii {this.context}
            <Componentf />
        </div>)
    }
}


export default ComponentE