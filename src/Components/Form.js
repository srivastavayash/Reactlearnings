import React, { Component } from 'react'
import "./Form.css"
class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }
    handleusername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handlepassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    submithandler = (event) => {
        alert('Your data have been submitted!')
    }
    render() {
        return (
            <form onSubmit={this.submithandler}>
                <div>
                    <label>UserName:</label><br />
                    <input type="text"
                        id='user'
                        value={this.state.username}
                        onChange={this.handleusername} />
                </div>
                <br></br>
                <div>
                    <label>Password:</label><br />
                    <input type="password"
                        id='pass'
                        value={this.state.password}
                        onChange={this.handlepassword} />
                </div>
                <br></br> <input type="submit" id='btn' value="Login" />
            </form>
        )
    }
}

export default Form