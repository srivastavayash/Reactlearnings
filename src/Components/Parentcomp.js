import React, {Component, PureComponent } from 'react'
import Memo from './Memo'
import Purecomp from './Purecomp'
import Regucomp from './Regucomp'
//adding purecomponent class will not allow parent to re-render again again if states are same as -previous
class Parentcomp extends  PureComponent {
constructor(props) {
  super(props)
  this.state = {
     Name:'Yash'
  }
}
componentDidMount(){
    setInterval(()=>{
        this.setState({
            Name:'Yash'
        })
    },2000)
}
    render() {
        console.log("*******************Parent component Render********************")
    return (
      <div>
      {/* <Purecomp Name={this.state.Name}/>
      <Regucomp Name={this.state.Name}/> */}
      <Memo Name={this.state.Name}/>
      </div>
    )
  }
}

export default Parentcomp