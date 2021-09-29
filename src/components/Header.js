import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'


const Header = ({title,showAdd ,onAdd}) => {
    
    return (
      <header className='header'> 
          <h1>{title}</h1> 
          <Button text={showAdd?'Close' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={onAdd}/>
          
  
        </header>
    )
}   

//we can give deaultprops also to component
Header.defaultProps={
    title:"Task Tracker",
}

//proptypes
Header.propTypes={
    title:propTypes.string,
}
//another way of adding styles
// const headStyles={
//     color:'red',
//     backgroundColor:'black',
// }

export default Header
