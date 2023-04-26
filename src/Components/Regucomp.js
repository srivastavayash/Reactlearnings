import React, { Component } from 'react'

class Regucomp extends Component {
     
  render() { console.log("*Regular component Render*")
    return (
      <div>He is a {this.props.Name}</div>
    )
  }
}

export default Regucomp