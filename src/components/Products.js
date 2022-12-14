import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div> 
        <div>
        <input type={'search'} placeholder={'search products'}></input>
        </div>
        <nav>
            <Link to={'featured'}>Featured Products</Link>
            <Link to={'new'}>New Products</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Products