import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class Componentf extends Component {
    render() {
        return (
            <UserConsumer>
            {
                (username)=>{
return <h1>Hello {username}</h1>
                }
            }
            </UserConsumer>
        )
    }
}

export default Componentf