import React, { Component } from 'react'

class Check extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    increment(){
        this.setState((prevstate)=>({
         count:prevstate.count+1
        }))
    }
    incrementfive(){
        this.increment();
        this.increment();
    }

  render() {
    return (
        <div><h1>Count-{this.state.count}</h1>
            <button onClick={()=>this.incrementfive()}>Increment</button>
        </div>

    )
  }
}

export default Check;