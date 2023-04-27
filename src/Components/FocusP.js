import React, { Component } from 'react'
import Inpref from './Inpref'

class FocusP extends Component {
constructor(props) {
  super(props)
this.Focusref=React.createRef()
}
handler=()=>{
    this.Focusref.current.focusinput()
}
    render() {
    return (
      <div>
        <Inpref ref={this.Focusref}/>
        <button onClick={this.handler}>Focus</button>
      </div>
    )
  }
}

export default FocusP