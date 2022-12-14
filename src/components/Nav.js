import React from 'react'
import {NavLink} from 'react-router-dom'
const navStyle = ({isActive}) => {
    return {
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? 'none' : 'underline',
    }
}
const Nav = () => {
  return (
    <nav className='nav'>
        <NavLink style={navStyle} to={'/'}>Home</NavLink>
        <NavLink style={navStyle} to={'/about'}>About</NavLink>
        <NavLink style={navStyle} to={'/products'}>Products</NavLink>
    </nav>
  )
}

export default Nav