import React, { Component } from 'react'
class Inpref extends Component {
constructor(props) {
  super(props)
this.Inpref=React.createRef()
}
focusinput=()=>{
this.Inpref.current.focus()
}
    render() {
    return (
    <div>
    <input type='text' ref={this.Inpref}></input>
    </div>
    )
  }
}

export default Inpref