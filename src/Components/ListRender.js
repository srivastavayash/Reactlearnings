import React from 'react'

function ListRender() {
    //Namelist
const List=['Hanuman','Shaktiman','Krish']
const Namelist=List.map(name=><h2>Hello Mr.{name}👋</h2>)
return  <div>{Namelist}</div>



    //numberlist
//     const List=[1,2,3,4]
//     const NumberList=List.map(number=>number*2)
//   return (
//     <div>{NumberList}</div>
//   )
}

export default ListRender