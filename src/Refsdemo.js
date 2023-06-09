import React, { Component } from 'react'
class Refsdemo extends Component {
    constructor(props) {
        super(props)
        // Refs To Input element:
        // Ref - to make autofocus
        // Steps: 
        // 1. Create ref – using React.creatRef() and assign it class variable – reference variable
        // 2. attach to input element using “ref” attribute
        // What above step does: makes the input element =  ‘current’ property, in the class variable.
        // 3. call focus() method on input element. – using the current property
        // Types/ways:
        // 1. React.createRef - uses “current” property - above
        // 2. callback Ref - without “current” - below
        // callback Ref:
        // Steps:
        // 1. create a property with null
        // 2. on function click, call setter of that property and assign the ‘element’
        // 3. call focus method – directly from reference variable
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }
    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
        // this.inputRef.current.focus() //refs are used to put focus on the components of react
    }
    handler = () => {
        alert('looking for' + " " + this.cbRef.value)
        console.log("Second: "+this.cbRef.value) //adding button for callbackref method
    }
    btn2handler = () => {
        alert('looking for' + " " + this.inputRef.current.value)
        console.log("first: "+this.inputRef.current.value)
    } //adding button for react.ref()
    render() {
        return (
            <div><hr></hr>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.btn2handler}>Search</button>
                <hr></hr>
                <br></br><input type="text" ref={this.setCbRef} />
                <button onClick={this.handler}>Search</button><hr />
            </div>
        )
    }
}

export default Refsdemo