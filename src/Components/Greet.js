import React from "react";
const Greet = props =>{ 
const {name,className}=props
return(
    <div>
        <h1>
            Hello ! This is {name} a.k.a {className}
        </h1>
    </div>
)
}
export default Greet;