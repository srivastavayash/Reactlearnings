import React from 'react'
function Column() {
//We can use key while using react fragments but if we will use only opening-closing tag we will unable to use key feature.
  return (<React.Fragment>
    <td>
        Name
    </td>
    <td>
        Age
    </td>
    </React.Fragment>)
}

export default Column