import React, { Component } from 'react'
class REnderprops extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           click:0
        }
      }
          increment=()=>{
           this.setState(prevState=>{
              return{click:prevState.click+1}
           })
          }
    render() {
    return (
      <div>{this.props.render(this.state.click,this.increment)}</div>
    )
  }
}

export default REnderprops