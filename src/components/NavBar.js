import { ShoppingCart } from 'phosphor-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext';

export const NavBar = () => {
  const { getTotalItemNumber } = useContext(ShopContext);

  const cartItemCount = getTotalItemNumber()

  return (
    <div className='navbar'>
        <div className='links'>
            <Link to='/shopping-cart'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/cart'><ShoppingCart size={32} /><span className='cart-item-count'>{cartItemCount > 0 && cartItemCount}</span></Link>
        </div>

    </div>
  )
}
