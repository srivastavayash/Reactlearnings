import React, { Component } from "react";
class Welcome extends Component {
    render() {
        const {name,className}=this.props
        return(<div> <h1> Just understanding destructuring in {name} {className} !</h1>
     </div>)}
}
export default Welcome;