import React from 'react'

const Shown = ({setShowAll}) => {
    return (
        <div>
          filter shown with <input type ="text" placeholder="Search..." id="formulario"
          onChange={event => setShowAll(event.target.value)}/>
        </div>
    )
}

export default Shown