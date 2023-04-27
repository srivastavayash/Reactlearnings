import React from 'react'
import  ReactDOM  from 'react-dom' //portals are used to make another div in index.html file and render it using app.js for better structure
function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Hello bruh !</h1>,
        document.getElementById('bruh')
    )
}
export default PortalDemo