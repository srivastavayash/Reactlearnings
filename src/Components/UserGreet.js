import React, { Component } from 'react'

 class UserGreet extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedin:false
    }
  }
    render() {       
    //4th approach using short-circuit-operator
    return(
        this.state.isLoggedin && <div>Welcome yash !</div>
        )
    
    
         //3rd approach using ternary operator
    // return(
    //     this.state.isLoggedin?<div>Hello Yash!</div>:<div>hello brother!</div>
    // )

    //2nd approach using variables to store conditional message
    // let message
    // if (this.state.isLoggedin){
    //     message=<div>Hello yash!</div>
    // }
    // else{
    //     message=<div>hello brother !</div>
    // }
    // return <div>{message}</div>


    //     if(this.state.isLoggedin){
    //         return (
    //             <div>
    //               <div>Welcome Yash!</div>
    //             </div>
    //           )
    //     }
    // else{
    //     return(
    //         <div>
    //             hello brother !
    //         </div>
    //     )
    // }
  }
}

export default UserGreet