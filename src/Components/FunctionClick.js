import React from 'react'

function FunctionClick() {

    function filehandler(){
        console.log('Event-Triggered')
    }
  return (
    <div>
        <button onClick={filehandler}>Click</button>
    </div>
  )
}

export default FunctionClick