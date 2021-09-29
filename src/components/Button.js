import React from 'react'
import propTypes from 'prop-types'

function Button({text,color,onClick}) {
    return (
        <div>
          <button 
          onClick={onClick}
          style={{backgroundColor:color}}
          className='btn'
          >
              {text}
        </button>   
        </div>
    )
}

Button.defaultProps={
    color:"steelblue",
}
Button.propTypes={
    text:propTypes.string,
    color:propTypes.string,
    onclick:propTypes.func,
}

export default Button
