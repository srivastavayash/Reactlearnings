import React, { Component } from 'react'

class ClassClick extends Component {
    clicked(){ 
        console.log('Button-Clicked!')
  }
    render() {
    return (
      <div><button onClick={this.clicked}>Click</button></div>
    )
  }
}

export default ClassClick