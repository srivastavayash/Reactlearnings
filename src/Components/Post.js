import React, { Component } from 'react'
import axios from 'axios'
class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }
    handler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submithandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submithandler}>
                    <div>
                        <label>UserId:</label><br />
                        <input type="text" name="userId" value={userId} onChange={this.handler} />
                    </div>
                    <div>
                        <label>Title:</label><br />
                        <input type="text" name="title" value={title} onChange={this.handler} />
                    </div>
                    <div>
                        <label>Body:</label><br />
                        <input type="text" name="body" value={body} onChange={this.handler} />
                    </div>
                    <br /> <button id='btn' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Post