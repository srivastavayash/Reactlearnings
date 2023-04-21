import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Learning EventBinding!'
      }
    //   this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler=()=>{
        this.setState({
        message:'Button dikha nhi dabana shuru !'
        })
        // console.log(this)
    }
  render() {
    return (
      <div><h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}> */}
        {/* <button onClick={()=>this.clickHandler()}> */}
        <button onClick={this.clickHandler}>
          checkNow  
        </button>
      </div>
    )
  }
}

export default EventBind