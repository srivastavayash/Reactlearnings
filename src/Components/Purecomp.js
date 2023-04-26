import React, { PureComponent } from 'react'

class Purecomp extends PureComponent {
  render() { console.log("*Pure component Render*")
    return (
      <div>Hello {this.props.Name}</div>
    )
  }
}

export default Purecomp