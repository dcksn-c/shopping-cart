import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext';

export const CartItem = (props) => {
    const { id, name, price, srcIcon } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartAmount } = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={srcIcon} />
        <div className='cart-description'>
            <h2>{name}</h2>
            <p>Credit Required: {(price*cartItems[id]).toLocaleString('en-US')}</p>
            <div className='countHandler'>
                <button className='minus-btn' onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartAmount(Number(e.target.value), id)}/>
                <button className='add-btn' onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
