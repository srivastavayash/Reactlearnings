import React, { Component } from 'react'

class Error extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }
  componentDidCatch(error,info){
    alert(error)
    console.log(info)
  }
  render() {
    if (this.state.hasError) {
      return <h1>Harley Quinn ne keher macha dia !</h1>
    }
    return this.props.children
  }
}

export default Error