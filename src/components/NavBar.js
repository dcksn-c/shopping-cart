import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/cart'><ShoppingCart size={32} /></Link>
        </div>

    </div>
  )
}
