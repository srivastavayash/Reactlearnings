import React from 'react'
function Child(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler('Yash !')}>
            greetParent
        </button>
    </div>
  )
}
export default Child 