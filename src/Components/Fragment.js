import React from 'react'
function Fragment() {
    // another method which can be used to achieve the result
    return (<React.Fragment>  
        <h1>Fragment</h1>
    <p>hello i am trying to write this piece of shit!</p>  
        </React.Fragment>)

    //You can write this code with only empty closing-enclosing tag
    //   return (<>  
    //     <h1>Fragment</h1>
    // <p>hello i am trying to write this piece of shit!</p>  
    //     </>)
    //you will get error if you will not using enlocing tags to encapsulate child tags in react
    // return (  
    // <h1>Fragment</h1>
    // <p>hello i am trying to write this piece of shit!</p>  
    // )
}


export default Fragment