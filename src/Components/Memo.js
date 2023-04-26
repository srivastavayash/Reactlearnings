import React from 'react'

function Memo({Name}) {
    console.log("Rendering Memo")
    return (
    <div>{Name}</div>
  )
}

export default React.memo( Memo ) //using react.memo() will allow child to not re-render again and again with parent