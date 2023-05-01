import React, { Component } from 'react'

class Click2 extends Component {

  render() {
 const {click,increment}=this.props
 return (
<button onClick={increment}>
    Clicked {click} times
</button>    )
  }
}

export default Click2