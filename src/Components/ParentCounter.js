import React, { Component } from "react";
const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                click: 0
            }
        }
        clicked = () => {
            this.setState(prevState => {
                console.log(this.state.click)
                return { click: prevState.click + 1 }

            })
        }
        render() {
            return <OriginalComponent click={this.state.click} clicked={this.clicked} />
        }
    }
    return NewComponent
}
export default UpdatedComponent